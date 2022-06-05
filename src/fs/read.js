import * as fs from 'fs/promises'
import { existsSync } from 'fs'

export const read = async () => {
  if (existsSync('./files/fileToRead.txt')) {
    const data =  await fs.readFile('./files/fileToRead.txt', 'utf-8')
      console.log(data)
    } else {
    throw new Error('FS operation failed')
  }
}


read()
  .catch(err => console.log(err.name, '—', err.message))