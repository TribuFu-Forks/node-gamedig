import { build } from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

const baseConfig = {
  entryPoints: ['lib/index.js'],
  platform: 'node',
  target: 'node14',
  bundle: true,
  minify: false,
  sourcemap: false,
  legalComments: 'none',
  plugins: [nodeExternalsPlugin()]
}

const moduleConfig = {
  ...baseConfig,
  outfile: 'dist/index.mjs',
  format: 'esm'
}

const legacyConfig = {
  ...baseConfig,
  outfile: 'dist/index.cjs',
  format: 'cjs'
}

build(moduleConfig).then(() => { }).catch(() => { process.exit(1) })
build(legacyConfig).then(() => { }).catch(() => { process.exit(1) })
