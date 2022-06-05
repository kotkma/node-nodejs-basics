import * as fs from 'fs/promises'
import { existsSync } from 'fs'

export const rename = async () => {
  if (!existsSync('./files/properFilename.md')) {
    try {
      await fs.access('./files/wrongFilename.txt')
      await fs.rename('./files/wrongFilename.txt', './files/properFilename.md')
    } catch (err) {
      throw new Error('FS operation failed')}
  } else {
    throw new Error('FS operation failed');
  }
}

rename()
  .catch(err => console.log(err.name, '—', err.message))