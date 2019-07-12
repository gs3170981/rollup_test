/* @flow */
// core-js 2.0写法
// import "@babel/polyfill";
// core-js 3.0写法 如果 babel配置项 是 entry 则需要以下安装且引用
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import './stylus/index.less';
import './stylus/base.css';
import test1, {
  test2
} from '@/foo.js';
import two123, {
  two2
} from '@/two.js';
import $ from 'jquery';
import {
  version
} from '../package.json';
// type test = Function
class asd {
  constructor(val: number) {}
  init() {
    console.log('asd')
    return true
  }
}
class asd1 {
  constructor(str: string) {}
  init() {
    console.log('asd1')
    return true
  }
}
// class publicF {
//   constructor(arr: PublicOpt): PublicAPI {
//     this.arr = arr
//     this.params = 0
//   }
//   get(str) {
//     return {
//       params: this.params
//     }
//   }
//   set(str) {
//     return () => {}
//   }
// }

const API: PublicAPI = {
  params: 0,
  get(str) {
    return {
      params: this.params
    }
  },
  set(str) {
    console.log(this)
    return this
  }
}

console.log(API.get())
API.set()

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
const qqq = new asd(123)
const qqq1 = new asd1('asd')
const two1 = new two123([123, 123, 'qwewqe'])
const two22 = new two2(888)
fetch()
console.log(`version: ${version}`);
console.log(`val: `, test1({
  qwe: 213
}));
console.log(`val: `, test2({
  qwe: 213
}));
console.log(`qqq: `, qqq);
console.log(`qqq1: `, qqq1);
console.log(`two: `, two1);
console.log('jq', $('html'));
console.log(two22.asd(99));