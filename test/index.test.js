import { createRepository } from '../dist/src/lib.js'
import assert from 'assert'

describe('Creating Repos', () => {
  it('should create an empty repo', () => {
    assert.deepEqual(
      {...createRepository().build()},
      {}
    )
  })
})
