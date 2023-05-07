import type { IRepositoryItem, TUUIDv4 } from '../types.js'
import { Repository } from '../repository.js'

export class RepositoryEntry {
  constructor(
    private repo: Repository,
    private _id: TUUIDv4
  ) {}

  public get id() {
    return this._id
  }

  public patch(entries: Partial<IRepositoryItem>): this {
    this.repo.patch(this.id, entries)
    return this
  }
}
