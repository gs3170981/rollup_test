import serve from 'rollup-plugin-serve'
import {
  resolveFile,
  publicConf
} from './rollup.config'

const PORT = 3000;

module.exports = publicConf.map((config, index) => {
  config.output.sourcemap = true;
  if (index === 0) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: PORT,
          contentBase: [resolveFile('example'), resolveFile('dist')]
        })
      ]
    ]
  }
  return config;
})