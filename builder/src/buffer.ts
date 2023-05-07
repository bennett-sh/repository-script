import { WriteStream } from 'fs'

export const DataSize = {
  u8: 1,
  u16: 2,
  u32: 4,
  i8: 1,
  i16: 2,
  i32: 4,
  float: 4,
  double: 8,
}

export function createBuffer(size: number, write: (buf: Buffer) => void) {
  const buf = Buffer.alloc(size)
  write(buf)
  return buf
}

export function createUTF8Buffer(text: string) {
  return Buffer.from(text, 'utf-8')
}

export async function writeAsync(stream: WriteStream, chunk: any): Promise<void> {
  return new Promise((res, rej) => {
    stream.write(chunk, err => err == undefined ? res() : rej(err))
  })
}

export async function writeMany(stream: WriteStream, actions: (any | ((index: number) => (Promise<any> | any)))[]) {
  for(let i = 0; i < actions.length; i++) {
    const action = actions[i]
    if(action instanceof Function) {
      let returnValue = action(i)
      if(returnValue instanceof Promise) returnValue = await returnValue
      await writeAsync(stream, returnValue)
      continue
    }
    await writeAsync(stream, action)
  }
}
