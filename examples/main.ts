
import { createRepo, RepositoryData, RepositoryGroup } from '../src/lib.js'
import { Float, Raw } from '../src/lib.js'

async function main() {
  // create a new repository
  const repo = createRepo()

  // add a new entry with a random repository id
  const entry = repo.addItem({
    Something: true
  })

  console.log(`repo id of first new item: ${entry.id}`)

  // add another new entry with a fixed repository id
  const anotherEntry = repo.addItem({
    ID_: 'd415ac05-2b5d-41bb-a1c9-305e2d8c6558'
  })

  // get an existing entry using it's repo id
  const existingEntry = repo.getItem('67a614ae-1eed-4fc3-b42f-efa5942cf4cb')
  // get an existing entry using repository data, which is generated from the game's repo
  const anotherExistingEntry = repo.getItem(RepositoryData.ICA_19)

  // do a raw patch
  anotherExistingEntry.patch({
    IsCheckedWhenFrisked: true,
    ItemImpactForce: new Float(1),
    AnotherProperty: new Raw('{ "a": true, "b": 5 }')
  })

  // patch a group of repo ids
  repo
    .patchAll(
      [
        RepositoryData.ICA_19_Baller_V3,
        ...RepositoryGroup.Pistols,
        '2890516e-f4b1-416b-a296-959b0f94347a'
      ],
      {
        SomeEntry: true
      }
    )

  // save the repo
  await repo.save('./example.repository.json')
}

main()
