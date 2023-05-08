import { IRepositoryConfiguration } from '../types'

export function weaponConfigurations(entries: Partial<IRepositoryConfiguration>) {
  return {
    ActorConfiguration: entries,
    PrimaryConfiguration: entries,
    SecondaryConfiguration: entries
  }
}
