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
}

const moduleConfig = {
  ...baseConfig,
  outfile: 'dist/index.mjs',
  format: 'esm',
  plugins: [nodeExternalsPlugin()]
}

const legacyConfig = {
  ...baseConfig,
  outfile: 'dist/index.cjs',
  format: 'cjs',
  plugins: [nodeExternalsPlugin({ allowList: ['got'] })]
}

build(moduleConfig).then(() => { }).catch(() => { process.exit(1) })
build(legacyConfig).then(() => { }).catch(() => { process.exit(1) })
