import * as fs from 'fs/promises'
import { existsSync } from 'fs'

export const remove = async () => {
  if (existsSync('./files/fileToRemove.txt')) {
      await fs.unlink('./files/fileToRemove.txt')
  } else {
    throw new Error('FS operation failed')
  }
}

remove()
  .catch(err => console.log(err.name, '—', err.message))
