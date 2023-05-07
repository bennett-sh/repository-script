import { RepositoryData, createRepo } from '../dist/src/lib.js'
import { readFile, rm } from 'fs/promises'
import assert from 'assert'

describe('Simple Repository', () => {
  const repo = createRepo()

  const blackLily = repo.getItem(RepositoryData.ICA_19_Black_Lilly)

  it('should provide the correct repo id', () => {
    assert.strictEqual(
      blackLily.id,
      'f93b99a3-aef6-419f-b303-59470577696d'
    )
  })

  it('should change values', () => {
    blackLily.patch({
      SomeProp: true,
      AnotherProp: 2
    })

    assert.deepStrictEqual(
      repo.build(),
      {
        'f93b99a3-aef6-419f-b303-59470577696d': {
          SomeProp: true,
          AnotherProp: 2
        }
      }
    )
  })

  it('should save', async () => {
    await repo.save('./_test.entity.patch.json', { spaces: 0, includeSchema: false })

    assert.ok(
      JSON.parse(await readFile('./_test.entity.patch.json', { encoding: 'utf-8' }))
    )

    await rm('./_test.entity.patch.json')
  })
})
