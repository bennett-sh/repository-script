import type { IRepository, IRepositoryItem, TUUIDv4 } from './types.js'
import { deepEnsureID, randomRepositoryID } from './utils/id.js'
import { RepositoryEntry } from './repositoryEntry/_index.js'
import { writeFile } from 'fs/promises'

export class Repository {
  private data = new Map<TUUIDv4, IRepositoryItem>()

  public addItem(entries: Partial<IRepositoryItem>): RepositoryEntry {
    let id = entries.ID_
    if(!id) id = randomRepositoryID()
    this.patch(id, { ID_: id })
    return new RepositoryEntry(this, id)
  }

  public getItem(id: TUUIDv4): RepositoryEntry {
    return new RepositoryEntry(this, id)
  }

  public patch(id: TUUIDv4, entries: Partial<IRepositoryItem>): this {
    this.data[id] = {
      ...this.data[id],
      ...entries
    }
    return this
  }

  public patchAll(ids: TUUIDv4[], handler: (entry: RepositoryEntry) => void): this
  public patchAll(ids: TUUIDv4[], handler: Partial<IRepositoryItem>): this
  public patchAll(ids, handler): this {
    ids.forEach(id => {
      const entry = this.getItem(id)

      if(!(handler instanceof Function)) {
        entry.patch(handler)
        return
      }

      entry.patch(handler(entry))
    })
    return this
  }

  public async patchAllAsync(ids: TUUIDv4[], handler: (entry: RepositoryEntry) => Promise<Partial<IRepositoryItem>>): Promise<void> {
    for(const id of ids) {
      const entry = this.getItem(id)
      entry.patch(await handler(entry))
    }
  }

  public build(): IRepository {
    return deepEnsureID(this.data)
  }

  public asRepositoryJSON(spaces: number = 2): string {
    return JSON.stringify(this.build(), (_, v) => {
      switch(v?._TYPE) {
        case 'float': return `REPOSCRIPT_FLOAT_VALUE_${v.value}_`
        case 'raw': return `REPOSCRIPT_RAW_VALUE_${Buffer.from(v.value).toString('base64')}_`
        default: return v
      }
    }, spaces)
      .replace(/\"REPOSCRIPT_FLOAT_VALUE_(\d+)_\"/g, (_, p) => p.includes('.') ? p : `${p}.0`)
      .replace(/\"REPOSCRIPT_RAW_VALUE_(.*)_\"/g, (_, p) => Buffer.from(p, 'base64').toString('utf-8'))
  }

  public async save(path: string, spaces: number = 2): Promise<void> {
    await writeFile(path, this.asRepositoryJSON(spaces))
  }
}

export function createRepository() {
  return new Repository()
}
