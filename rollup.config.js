import glob from 'glob'
import path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import rimraf from 'rimraf'
import summary from 'rollup-plugin-summary'
import nodePolyfills from 'rollup-plugin-node-polyfills'
const rootPath = path.resolve(__dirname, './')
const pkg = require('./package.json')

rimraf(path.resolve(rootPath, 'lib/'), (err) => {})
rimraf(path.resolve(rootPath, 'dist/'), (err) => {})

const extensions = ['.js', '.ts']

const getBabelOptions = ({ useESModules }) => ({
  exclude: 'node_modules/**',
  runtimeHelpers: true,
  include: 'src/**',
  extensions,
  plugins: [['@babel/transform-runtime', { regenerator: false, useESModules }]]
})

const getEntry = () => {
  const files = glob.sync('src/*/*.ts')
  return files
}

function createConfig({ output, mulEntry }) {
  return {
    input: mulEntry ? getEntry() : 'src/index.ts',
    output,
    plugins: [
      json(),
      nodePolyfills(),
      nodeResolve({
        extensions,
        preferBuiltins: true,
        mainFields: ['jsnext:main'],
        browser: true,
        modulesOnly: true
      }),
      commonjs({
        transformMixedEsModules: true
      }),
      typescript(),
      babel(getBabelOptions({ useESModules: false })),
      terser(),
      summary()
    ],
    external: ['es6-promise'] // 不需要打入包内的第三方npm包,例如['lodash']
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
