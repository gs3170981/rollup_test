## rollup test project

【rollup】buble 比 babel 简单太多，配置项清晰明了，但限制也很多，不支持 es6+，以及解构等操作，需要额外的 polyfill，且插件也没找着，太局限！

generator、es6 高阶函数（map 等）promise 不支持转换编译
如果你的项目不需要支持这些编译，且只需要在主流浏览器下执行(移动端就不要想了)

async 补丁 将会编译成 generator

那 bubel 是非常好的选择
