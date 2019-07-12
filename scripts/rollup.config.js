import path from 'path'
// 打包用于读取json数据
import json from 'rollup-plugin-json';
// 用于import node_modules公用库，否则打包失败 用于打包
import resolve from 'rollup-plugin-node-resolve';
// 打包时先将模块编译为es5再执行 用于打包
import commonjs from 'rollup-plugin-commonjs';
// 编译es6+ 他会默认执行根目录的babel.conf配置
import babel from 'rollup-plugin-babel';
// 别名
import alias from 'rollup-plugin-alias';
// 打包时去除flow写法 - 但rollup dev环境其实也是打包
import flow from 'rollup-plugin-flow-no-whitespace'
// 动态替换代码中的内容，例如定义__D__: true 则在打包生成后__D__值为true
import replace from 'rollup-plugin-replace'
// 作用就是 添加一个style标签加到html head的头部
import postcss from 'rollup-plugin-postcss';

// PostCSS plugins
// 声明变量
import simplevars from 'postcss-simple-vars';
// 可嵌套
import nested from 'postcss-nested';
// 可用css最新写法 集成 autoprefixer
import cssnext from 'postcss-preset-env';
// css压缩
import cssnano from 'cssnano';

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}
const publicConf = [
  // 可配置多入口出口
  // {}
  {
    banner: '', // 顶部加注释
    footer: '', // 尾部加注释
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      // iife -适用于浏览器 es -es5模块 cjs -node模块 amd -类似RequireJS的加载器 umd -通用 但注意体积
      format: 'umd',
      name: 'demo' // 必填
    },
    plugins: [
      postcss({
        plugins: [
          // 如果用less、sass之类的，这些就可以删了，包括package里的, 可以不需要cssnext语法，但要安装autoprefixer
          simplevars(),
          nested(),
          // https://github.com/csstools/postcss-preset-env#browsers
          cssnext({
            // 覆盖99.5%以上的css兼容率，此配置项是autoprefixer的，cssnext已集成
            // https://github.com/browserslist/browserslist#queries
            browsers: 'cover 99.5%'
            // 不加这个 则-webkit-的前缀是没有的
          }),
          cssnano(),
        ],
        // 处理末尾的后缀文件
        extensions: ['.css', '.less', '.styl', '.sass', '.scss'],
        // https://github.com/egoist/rollup-plugin-postcss
      }),
      // 没有这个 只用babel的话，无法import node_modules库，打包出来仍有require
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules' // 仅处理node_modules内的库
        }
      }),
      replace({
        // do something...
        __Author__: 'gs3170981'
      }),
      alias({
        '@': resolveFile('src')
      }),
      flow(),
      // 前后顺序很重要 - 先babel再flow就卡着了
      // https://www.npmjs.com/package/rollup-plugin-node-resolve
      babel({
        // 如果用了transform-runtime插件则需开启这个
        runtimeHelpers: true,
        // 不编译node_modules里的库，否则里面的写法与@babel/runtime-corejs3的版本会有冲突
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