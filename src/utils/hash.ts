
import type { TIOIHash } from '../types.js'
import md5 from 'md5'

const HASH_PATTERN = /00[A-F0-9]{14}/i

export const isHash = (data: string | TIOIHash) => HASH_PATTERN.test(data)
export const normalizeToHash = (path: string | TIOIHash) => isHash(path) ? path : hash(path)
export const hash = (path: string) => '00' + md5(path).slice(2, 16).toUpperCase() as TIOIHash
export const getRepoRuntimeValue = (data: string | TIOIHash) => parseInt(normalizeToHash(data), 16)
