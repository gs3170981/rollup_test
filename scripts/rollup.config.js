import path from 'path'
// 打包用于读取json数据
import json from 'rollup-plugin-json';
// 用于import node_modules公用库，否则打包失败 用于打包
import resolve from 'rollup-plugin-node-resolve';
// 打包时先将模块编译为es5再执行 用于打包
import cjs from 'rollup-plugin-commonjs';
// 编译es6+
import buble from 'rollup-plugin-buble';
// buble不支持async与generator 打补丁(仍不支持generator)
import async from 'rollup-plugin-async';

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

const publicConf = [{
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'umd',
    name: 'demo'
  },
  plugins: [
    json(),
    resolve(),
    cjs(),
    async (),
      buble({
        // generator不支持编译，需加这个配置项
        // async将会编译成generator，但generator不会编译，没找到好的插件
        transforms: {
          generator: false
        }
      }),
  ],
}]

export {
  publicConf,
  resolveFile
}