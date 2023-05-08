import { deepEnsureID } from '../../dist/src/utils/id.js'
import { createRepository } from '../../dist/src/repository.js'
import assert from 'assert'

describe('IDs', () => {
  const repo = createRepository()

  const entryA = repo.addItem({ ID_: 'fdd76b84-52ba-43b1-a442-3c0d0e0239c0' })
  const entryB = repo.addItem({ ID_: '5d7e6b15-4d77-4ddc-a256-8b8dbdf52e08' })

  it('should replace repository entries with ids', () => {
    assert.deepStrictEqual(
      deepEnsureID({
        SomeProp: entryA,
        SomeList: [
          entryA,
          entryB
        ],
        SomeMap: {
          AnotherMap: {
            test: entryA
          },
          asd: '5d7e6b15-4d77-4ddc-a256-8b8dbdf52e08'
        }
      }),
      {
        SomeProp: 'fdd76b84-52ba-43b1-a442-3c0d0e0239c0',
        SomeList: [
          'fdd76b84-52ba-43b1-a442-3c0d0e0239c0',
          '5d7e6b15-4d77-4ddc-a256-8b8dbdf52e08'
        ],
        SomeMap: {
          AnotherMap: {
            test: 'fdd76b84-52ba-43b1-a442-3c0d0e0239c0'
          },
          asd: '5d7e6b15-4d77-4ddc-a256-8b8dbdf52e08'
        }
      }
    )
  })
})
