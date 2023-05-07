import { readFileSync, writeFileSync } from 'fs'

const s = JSON.parse(readFileSync('./test.json'))

const { definitions: { RepositoryItem: { properties: RepositoryItem }, Configuration: { properties: Config } } } = s
let content = 'export interface IRepositoryItem {'

for(const [k, v] of Object.entries(RepositoryItem)) {
  content += `  ${k}  :  ${(() => {
    if(v?.$ref?.endsWith('ConfigurationReference')) return 'IRepositoryConfiguration'
    if(v?.type == 'boolean') return 'boolean'
    if(v?.type == 'integer') return 'number'
    if(v?.type == 'string') return 'string'
    if(v?.type == 'number') return 'number | Float'
    if(v?.type == 'array') {
      let type = v.items?.type
      if(!type) {
        console.log('failed', k)
        return 'ERROR'
      }
      if(type == 'integer') return '(number | Float)[]'
      return `${type}[]`
    }

    console.log('unknown type', k, v)
  })()} | Raw\n`
}
content += '}'
content += 'export interface IRepositoryConfiguration {'
for(const [k, v] of Object.entries(Config)) {
  content += `  ${k}  :  ${(() => {
    if(v?.type == 'boolean') return 'boolean'
    if(v?.type == 'integer') return 'number | Float'
    if(v?.type == 'string') return 'string'
    if(v?.type == 'number') return 'number'
    if(v?.type == 'array') {
      let type = v.items?.type
      if(!type) {
        console.log('failed', k)
        return 'ERROR'
      }
      if(type == 'integer') return '(number | Float)[]'
      return `${type}[]`
    }

    console.log('unknown type', k, v)
  })()} | Raw\n`
}
content += '}'
writeFileSync('./test.types.ts', content)
