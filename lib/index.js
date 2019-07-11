"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _foo = _interopRequireDefault(require("./foo.js"));

var _package = require("../package.json");

// core-js 2.0写法
// import "@babel/polyfill";
// core-js 3.0写法 如果 babel配置项 是 entry 则需要以下安装且引用
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import $ from 'jquery';
var asd = function asd() {
  (0, _classCallCheck2["default"])(this, asd);
};

var asd1 = function asd1() {
  (0, _classCallCheck2["default"])(this, asd1);
};

var fetchData = function fetchData(value) {
  return new _promise["default"](function (resolve) {
    (0, _setTimeout2["default"])(function () {
      resolve(value);
    }, 3000);
  });
};

var fetchData1 = function fetchData1(value) {
  return new _promise["default"](function (resolve) {
    (0, _setTimeout2["default"])(function () {
      resolve(value + 100);
    }, 500);
  });
};

function fetch() {
  return _fetch.apply(this, arguments);
}

function _fetch() {
  _fetch = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var value1, value2;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchData(500);

          case 2:
            value1 = _context.sent;
            // 将异步的转换为同步回调
            console.log(value1);
            _context.next = 6;
            return fetchData1(value1);

          case 6:
            value2 = _context.sent;
            console.log(value2);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetch.apply(this, arguments);
}

var qqq = new asd();
var qqq1 = new asd1();
fetch();
console.log("version: ".concat(_package.version));
console.log("val: ".concat((0, _foo["default"])()));
console.log("qqq: ".concat(qqq));
console.log("qqq1: ".concat(qqq1)); // console.log(`$: ${$}`);