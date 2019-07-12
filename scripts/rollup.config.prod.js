import {
  publicConf
} from './rollup.config'
// 打包快照
// 根目录的.size-snapshot.json文件用于查看体积大小
import {
  sizeSnapshot
} from 'rollup-plugin-size-snapshot'
import {
  uglify
}
from 'rollup-plugin-uglify'


export default publicConf.map((config, index) => {
  config.output.sourcemap = false;
  config.plugins = [
    ...config.plugins,
    ...[
      // sizeSnapshot文档提示需放在ug之上，否则终端看不到
      sizeSnapshot(),
      // uglify(),
    ]
  ]
  config.external = [
    ...config.external,
    // 指出应将哪些模块视为外部模块 如jq，不写则会吧jq集成进index文件
    // ...['jquery']
  ]
  return config;
});