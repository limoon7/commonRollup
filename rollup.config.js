import glob from 'glob'
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import getBabelOutputPlugin from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import gzipPlugin from 'rollup-plugin-gzip'
import rimraf from 'rimraf'
import summary from 'rollup-plugin-summary'
const rootPath = path.resolve(__dirname, './')
const pkg = require('./package.json')

rimraf(path.resolve(rootPath, 'lib/'), (err) => {})
rimraf(path.resolve(rootPath, 'dist/'), (err) => {})

function createConfig({ output, mulEntry }) {
  return {
    input: mulEntry ? glob.sync('src/*/*.ts') : 'src/index.ts',
    output,
    plugins: [
      resolve(),
      json(),
      commonjs({
        transformMixedEsModules: true
      }),
      getBabelOutputPlugin({
        configFile: path.resolve(__dirname, '.babelrc')
      }),
      typescript(),
      terser(),
      gzipPlugin(),
      summary()
    ],
    external: [] // 不需要打入包内的第三方npm包,例如['lodash']
  }
}

function getConfig() {
  return [
    createConfig({
      output: [
        {
          file: pkg.main,
          format: 'cjs',
          exports: 'named'
        }
      ]
    }),
    createConfig({
      output: [
        {
          file: pkg.module,
          format: 'es',
          exports: 'named'
        }
      ]
    }),
    createConfig({
      output: [
        {
          dir: 'lib',
          format: 'esm',
          exports: 'named'
        }
      ],
      mulEntry: true
    })
  ]
}

export default getConfig()
