import { DataSize, createBuffer, createUTF8Buffer, writeAsync } from './buffer.js'
import { readFile, readdir } from 'fs/promises'
import { createInterface } from 'readline'
import { createWriteStream } from 'fs'
import { join } from 'path'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

let repo = []

function rewriteLine(content: any) {
  process.stdout.write('\r\x1b[2K')
  process.stdout.write(content)
}

function tsIfyName(name: string) {
  if(name.includes('(Device-Outbreak)')) name += ' Outbreak'
  return name
    .replace(/^\(.*\)/g, '')
    .trim()
    .replace(/\//g, '_')
    .replace(/\s/g, '_')
    .replace(/\-/g, '_')
    .replace(/(\(|\)|\'|\"|\\)/g, '')
    // merge 2+ sequential underscores
    .replace(/\_(\_)*/g, '_')
    // last steps
    .replace(/^./g, (match) => match.toUpperCase())
    .replace(/[_-](.)/g, (match, p1) => match.charAt(0) + p1.toUpperCase())
}

async function loadRepo() {
  const reposFolder = await readdir('./repos')

  for(const chunk of reposFolder) {
    const partialRepoFile = JSON.parse(await readFile(join('./repos', chunk, 'REPO', '00204D1AFD76AB13.REPO'), { encoding: 'utf-8' }))

    for(let i = 0; i < partialRepoFile.length; i++) {
      if(i % 100 == 0) rewriteLine(`loading repo (${Math.round((i / partialRepoFile.length) * 1000) / 10}%)`)
      const override = partialRepoFile[i]
      const id = override.ID_

      if(repo.some(entry => entry.ID_ === id)) {
        repo = repo.map(entry => entry.ID_ === id ? { ...entry, ...override } : entry)
        return
      }
      repo.push(override)
    }
  }
  rewriteLine('repo loaded')
}

async function main() {
  await loadRepo()

  const idTitleRepoMap = repo
    .map(({ Title, Name, ID_, CommonName }) => [ID_, CommonName ?? Title ?? Name])
    .filter(entry => entry.length == 2 && entry[1]?.length && entry[1].length > 0)
    .map(([id, title]) => [id, tsIfyName(title)])

  const idCategoryMap = repo
    .map(({ InventoryCategoryName, ID_ }) => [ID_, InventoryCategoryName])
    .filter(entry => entry.length == 2 && entry[1]?.length && entry[1].length > 0)
    .map(([id, cat]) => [id, tsIfyName(cat)])

  Filter_Duplicate_Names: {
    let names = []

    for(let i = 0; i < idTitleRepoMap.length; i++) {
      const [key, value] = idTitleRepoMap[i]
      if(names.includes(value)) {
        idTitleRepoMap[i] = [key, value + `_${names.filter(x => x === value).length}`]
      }
      names.push(value)
    }
  }

  const stream = createWriteStream('./latest.repo-meta')

  Write_ID_Name_Map_To_File: {
    console.log('\nwriting id-name to repo meta')
    const buffers = idTitleRepoMap
      .map(
        ([ id, title ]) => [
          createUTF8Buffer(id),
          createBuffer(DataSize.u16, b => b.writeUInt16LE(createUTF8Buffer(title).length)),
          createUTF8Buffer(title),
        ]
      )
      .flat(Infinity)
    const bufferLength = buffers
      .map(b => b.length)
      .reduce((a, b) => a + b)

    await writeAsync(stream, createBuffer(DataSize.u32, b => b.writeUInt32LE(bufferLength)))

    for(const buffer of buffers) {
      await writeAsync(stream, buffer)
    }
    console.log('done')
  }

  Write_ID_Category_Map_To_File: {
    console.log('writing id-category to repo meta')
    const buffers = idCategoryMap
      .map(
        ([ id, category ]) => [
          createUTF8Buffer(id),
          createBuffer(DataSize.u16, b => b.writeUInt16LE(createUTF8Buffer(category).length)),
          createUTF8Buffer(category),
        ]
      )
      .flat(Infinity)
    const bufferLength = buffers
      .map(b => b.length)
      .reduce((a, b) => a + b)

    await writeAsync(stream, createBuffer(DataSize.u32, b => b.writeUInt32LE(bufferLength)))

    for(const buffer of buffers) {
      await writeAsync(stream, buffer)
    }
    console.log('done')
  }

  stream.end(() => console.log('file closed'))
  rl.close()
}

main()
