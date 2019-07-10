const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
        ie: "11",
        // https://babeljs.io/docs/en/babel-preset-env#targets
        // 如果变成ie，打包内容会变更，这与babel自带的编译lib有差异，babel编译则默认为编译es5+ 而rollup babel编译会看这个配置项 - npm run babel
        // ie: 8,
      },
      // false - 不对其有所操作，polyfill全量引入
      // entry - 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill。浏览器版本越高体积约小
      // usage - 分析代码调用, 但是对于原型链上的方法仅仅按照方法名去匹配, 可以得到更小的 polyfill 体积. 但是它不会去分析代码依赖的 npm 包的内容, 如果某个 npm 包是需要一些 polyfill 的, 那这些 polyfill 并不会被打包进去
      // 用这两个属性需安装@babel/polyfill、regenerator-runtime，可对babel无法编译的promise等函数进行解析
      useBuiltIns: "usage",
      corejs: 3 // 当前3为最新版本，如要修改2，则tnpm install core-js@2 --save
    },
  ],
];
const plugins = [
  // runtime 解决重复引用的问题
  // http://zcxy-gs.lofter.com/post/1dfdf700_1c621af56
  ["@babel/plugin-transform-runtime", {
    // 这个配置项坑死我了，打包出来还有requre
    // corejs: 3
  }]
]

module.exports = function (api) {
  api.cache(true);

  return {
    presets,
    plugins
  };
}