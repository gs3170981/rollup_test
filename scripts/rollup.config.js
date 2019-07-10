import path from 'path'
// 打包用于读取json数据
import json from 'rollup-plugin-json';
// 用于import node_modules公用库，否则打包失败 用于打包
import resolve from 'rollup-plugin-node-resolve';
// 打包时先将模块编译为es5再执行 用于打包
import commonjs from 'rollup-plugin-commonjs';
// 编译es6+
import babel from 'rollup-plugin-babel';
// babel配置项
import babelConfig from './babel.config.js';

// import buble from 'rollup-plugin-buble';
// buble不支持async与generator 打补丁(仍不支持generator)
// import async from 'rollup-plugin-async';
// import "@babel/polyfill";

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}
const publicConf = [
  // 可配置多入口出口
  // {}
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      // iife -适用于浏览器 es -es5模块 cjs -node模块 amd -类似RequireJS的加载器 umd -通用 但注意体积
      format: 'umd',
      name: 'demo'
    },
    plugins: [
      resolve(),
      // babel(resolveFile('babel.config.js')),
      // babel(babelConfig),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        // presets: ["@babel/preset-env"]
      }),
      // babel({
      // exclude: 'node_modules/**',
      // runtimeHelpers: true,
      // plugins: [
      //   [
      //     '@babel/transform-runtime',
      //   ]
      // ]
      // }),
      commonjs(),
      json(),
      // buble(),
      // async (),
    ],
    external: []
  }
]

export {
  publicConf,
  resolveFile
}