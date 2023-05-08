import { IRepositoryConfiguration } from '../types'

export function patchConfigurations(entries: Partial<IRepositoryConfiguration>) {
  return {
    ActorConfiguration: entries,
    PrimaryConfiguration: entries,
    SecondaryConfiguration: entries
  }
}
