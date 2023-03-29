const child_process = require('child_process')
const os = require('os')
const path = require('path')

const root = path.resolve(__dirname, '..')
const args = process.argv.slice(2)
const options = {
  cwd: process.cwd(),
  env: process.env,
  stdio: 'inherit',
  encoding: 'utf-8',
}

if (os.type() === 'Windows_NT') {
  options.shell = true
}

let result

if (process.cwd() !== root) {
  // We're not in the root of the project
  // In this case, forward the command to `yarn`
  result = child_process.spawnSync('yarn', args, options)
} else if (args.length) {
  if (args[0] === 'add-deps') {
    child_process.spawnSync(`yarn`, ['add', args[1], '-D'], options)
    child_process.spawnSync(`yarn`, ['add', args[1], '-P'], options)
    child_process.spawnSync(`yarn`, ['add', args[1]], {
      ...options,
      cwd: path.resolve(__dirname, '..', 'example'),
    })
    result = child_process.spawnSync(`yarn`, ['bootstrap'], options)
  } else {
    result = child_process.spawnSync('yarn', args, options)
  }
} else {
  // If `yarn` is run without arguments, perform bootstrap
  result = child_process.spawnSync('yarn', ['bootstrap'], options)
}

process.exitCode = result.status
