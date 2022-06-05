import { spawn } from 'child_process'
const path = './files/script.js'

export const spawnChildProcess = async () => {
  const args = process.argv.slice(2)
  const child = spawn('node', [path, ...args], {
    stdio: 'inherit',
  })

  child.on('message', (message) => {
    console.log(`cp: ${message}`)
  })
  //child.stdin.write('data to master process')
}

spawnChildProcess(['.'])