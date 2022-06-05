import * as fs from 'fs/promises'
import * as path from 'path'

export const copy = async (src, dest) => {
  try {
    const entries = await fs.readdir(src, {withFileTypes: true})
    console.log(entries)
    await fs.mkdir(dest)

    for (let entry of entries) {
      let srcPath = path.join(src, entry.name)
      let destPath = path.join(dest, entry.name)

      entry.isDirectory() ?
        await copy(srcPath, destPath) :
        await fs.copyFile(srcPath, destPath)
    }

  } catch (err) {
    console.log(err.name, err.message)
    throw new Error('FS operation failed')
  }
}

copy('./files', './files_copy')
  .catch(err => console.log(err.name, '—', err.message))