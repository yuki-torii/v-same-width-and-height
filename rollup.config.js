import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

let targets = [ { dest: 'dist/v-same-width-and-height.js', format: 'umd' } ]

if (process.env.BUILD) {
  targets = targets.concat([
    { dest: 'dist/v-same-width-and-height.common.js', format: 'cjs' },
    { dest: 'dist/v-same-width-and-height.es5.js', format: 'es' }
  ])
}

export default {
  entry: 'src/index.js',
  plugins: [buble(), nodeResolve(), commonjs()],
  moduleName: 'v-same-width-and-height',
  targets: targets
}
