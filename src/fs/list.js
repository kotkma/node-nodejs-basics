import * as fs from 'fs/promises'
import { existsSync } from 'fs'

export const list = async () => {
  if (existsSync('./files')) {
    const files = await fs.readdir('./files')
    for (const file of files)
      console.log(file)
  }
  else {
    throw new Error('FS operation failed')
  }
}

list()
  .catch(err => console.log(err.name, '—', err.message))