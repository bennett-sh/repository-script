import { normalizeToHash, getRepoRuntimeValue } from '../../dist/src/utils/hash.js'
import assert from 'assert'

describe('IOI Hashing', () => {
  it('should hash it', () => {
    assert.equal(
      normalizeToHash('[assembly:/_pro/somepath]'),
      '00631D07B3741C5B'
    )
  })

  it('should not hash it', () => {
    assert.equal(
      normalizeToHash('00631D07B3741C5B'),
      '00631D07B3741C5B'
    )
  })

  it('should get the repo runtime value', () => {
    assert.equal(
      getRepoRuntimeValue('[assembly:/_pro/someitem]'),
      59988088333728240
    )
  })
})
