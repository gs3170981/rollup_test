// core-js 2.0写法
// import "@babel/polyfill";
// core-js 3.0写法 如果 babel配置项 是 entry 则需要以下安装且引用
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import './stylus/index.less';
import './stylus/base.css';
import val from './foo.js';
// import $ from 'jquery';

import {
  version
} from '../package.json';
class asd {
  constructor() {}
}
class asd1 {
  constructor() {}
}

var fetchData = function (value) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value)
    }, 3000)
  })
}

var fetchData1 = function (value) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value + 100)
    }, 500)
  })
}

async function fetch() { // 声明这里有异步回调
  const value1 = await fetchData(500) // 将异步的转换为同步回调
  console.log(value1)
  const value2 = await fetchData1(value1)
  console.log(value2)
}
const qqq = new asd()
const qqq1 = new asd1()
fetch()
console.log(`version: ${version}`);
console.log(`val: ${val()}`);
console.log(`qqq: ${qqq}`);
console.log(`qqq1: ${qqq1}`);
// console.log(`$: ${$}`);