import { createRepo } from '../dist/src/lib.js'
import assert from 'assert'

describe('Creating Repos', () => {
  it('should create an empty repo', () => {
    assert.deepStrictEqual(
      createRepo().build(),
      { }
    )
  })
})
