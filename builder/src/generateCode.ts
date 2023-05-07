import { createInterface } from 'readline'
import { open, stat, writeFile } from 'fs/promises'
import { DataSize } from './buffer.js'
import { join } from 'path'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

function rewriteLine(content: any) {
  process.stdout.write('\r\x1b[2K')
  process.stdout.write(content)
}

const UUIDv4_LENGTH = 36

async function generateTSFile(idNameMap: [string, string][], idCategoryMap: {[category: string]: string[]}) {
  let content = `import type { TUUIDv4 } from './types.js'
export const RepositoryData = {`
  idNameMap.forEach(([ id, name ]) => content += `"${name.replace(/(\"|\\)/g, '')}":"${id.replace(/(\"|\\)/g, '')}" as TUUIDv4,`)
  content += `};
  export const RepositoryGroup = {`
  for(const [category, ids] of Object.entries(idCategoryMap)) {
    content += `"${category.replace(/(\"|\\)/g, '')}": [
  ${ids.map(id => id.replace(/(\"|\\)/g, '')).map(id => `"${id}"`).join(',')}
],`
  }
  content += `};`

  await writeFile(
    join('../src/_REPOSITORY_DATA.generated.ts'),
    content
  )
}

async function main() {
  const fileSize = (await stat('./latest.repo-meta')).size
  let buffer = Buffer.alloc(fileSize)
  console.log(`allocated ${Math.round(fileSize / 100) / 10}KB for repo meta file.`)
  const file = await open('./latest.repo-meta')
  await file.read({ buffer: buffer })

  let position = 0

  const idNameMapSize = buffer.readUInt32LE(position)
  position += DataSize.u32

  let idNameMap = []

  while(position < idNameMapSize) {
    rewriteLine(`reading file (${Math.round((position / fileSize) * 1000) / 10}%)...`)
    const id = buffer.toString('utf-8', position, position + UUIDv4_LENGTH)
    position += UUIDv4_LENGTH

    const nameSize = buffer.readUInt16LE(position)
    position += DataSize.u16

    const name = buffer.toString('utf-8', position, position + nameSize)
    position += nameSize

    idNameMap.push([id, name])
  }

  const idCategoryMapOffset = position
  const idCategoryMapSize = buffer.readUInt32LE(position)
  position += DataSize.u32

  let idCategoryMap = {}

  while(position < idCategoryMapSize + idCategoryMapOffset) {
    rewriteLine(`reading file (${Math.round((position / fileSize) * 1000) / 10}%)...`)
    const id = buffer.toString('utf-8', position, position + UUIDv4_LENGTH)
    position += UUIDv4_LENGTH

    const categorySize = buffer.readUInt16LE(position)
    position += DataSize.u16

    let category = buffer.toString('utf-8', position, position + categorySize)
    position += categorySize

    if(id.length != UUIDv4_LENGTH) return

    if(category === 'Assaultrifle') category = 'AssaultRifle'
    if(category === 'Sniperrifle') category = 'SniperRifle'
    if(category === 'Smg') category = 'SMG'

    if(!category.endsWith('s')) category += 's'

    if(idCategoryMap[category]?.length > 0) {
      idCategoryMap[category].push(id)
    } else {
      idCategoryMap[category] = [id]
    }
  }

  rewriteLine('reading file (100%)... done.\n')

  buffer = null
  console.log('cleared file buffer')

  console.log('generating ts file')

  await generateTSFile(idNameMap, idCategoryMap)

  await file.close()
  rl.close()
}

main()
