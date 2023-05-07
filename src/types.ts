
export type TDigitCharacter = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type TLowerHexCharacter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
export type TUpperHexCharacter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
export type THexCharacter = TDigitCharacter | TLowerHexCharacter | TUpperHexCharacter
export type TLowerHex = (TDigitCharacter | TLowerHexCharacter)[]
export type TUpperHex = (TDigitCharacter | TUpperHexCharacter)[]
export type THex = THexCharacter[]
export type TIOIHash = `00${THexCharacter[14]}`
export type TUUIDv4 = `${THexCharacter[8]}-${THexCharacter[4]}-${THexCharacter[4]}-${THexCharacter[4]}-${THexCharacter[12]}` | string

export interface IRepositoryEntryBase {
  ID_: TUUIDv4
}
export type IRepositoryEntry = IRepositoryEntryBase & Record<string, string | number | boolean | any[] | {[key: string]: any}>
export type IRepository = Map<TUUIDv4, IRepositoryEntry>
