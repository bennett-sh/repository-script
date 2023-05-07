import { RepositoryEntry } from '../repositoryEntry/base.js'
import { TUUIDv4 } from '../types.js'
import { v4 as uuidv4 } from 'uuid'

export function ensureID(data: string | TUUIDv4 | RepositoryEntry): TUUIDv4 {
  if(data instanceof RepositoryEntry) return data.id
  return data as TUUIDv4
}

export function deepEnsureID<T>(obj: T): T {
  const result: { [key: string]: any } = {}
  if(obj instanceof RepositoryEntry) return obj.id as T
  if(obj instanceof String) return obj
  for(const key of Object.keys(obj ?? {})) {
    if(obj.hasOwnProperty(key)) {
      const value = obj[key]
      if(value instanceof RepositoryEntry || typeof value !== 'object') {
        result[key] = ensureID(value)
        continue
      }
      if(value?.[Symbol.iterator]) {
        result[key] = [...value].map(x => deepEnsureID(x))
        continue
      }
      result[key] = deepEnsureID(value)
    }
  }
  return result as T
}

export function randomRepositoryID(): TUUIDv4 {
  return uuidv4() as TUUIDv4
}
