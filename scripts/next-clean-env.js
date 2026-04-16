#!/usr/bin/env node
// Removes IDE-injected Next.js env vars from other projects
// (e.g. __NEXT_PRIVATE_STANDALONE_CONFIG from CodeGPT VS Code extension)
// before starting the Next.js process. Works cross-platform.

delete process.env.__NEXT_PRIVATE_STANDALONE_CONFIG
delete process.env.__NEXT_PRIVATE_ORIGIN

const { spawnSync } = require('child_process')
const path = require('path')

// Use the actual next.js entry point directly to avoid shell script issues on Windows
const nextEntry = path.resolve(__dirname, '../node_modules/next/dist/bin/next')
const args = process.argv.slice(2)

const result = spawnSync(process.execPath, [nextEntry, ...args], {
  stdio: 'inherit',
  env: process.env,
  cwd: path.resolve(__dirname, '..'),
})

process.exit(result.status ?? 1)
