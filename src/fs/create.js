import { writeFile } from 'fs/promises'

export const create = async () => {
  try {
    await writeFile('fresh.txt', 'I am fresh and young', {flag: 'wx'})
  } catch (err) {
      throw new Error('FS operation failed')
  }
}

create()
  .catch(err => console.log(err.name, '—', err.message))