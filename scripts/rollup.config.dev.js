import serve from 'rollup-plugin-serve'
import {
  resolveFile,
  publicConf
} from './rollup.config'

const PORT = 3000;

module.exports = publicConf.map((config, index) => {
  // 映射具体的文件，debugger非常方便
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