// flow 类型 boolean, string, number, null, undefined
// http://xzfyu.com/2018/02/24/Js/flow%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/

declare interface PublicAPI {
  params: number,
    // T 泛型 - 不确定接收或返回的对象是什么的时候，可用
    // https://www.jianshu.com/p/10826f824e7d
    get: < T > (el: T) => {
      params: number
    },
    // void 为可空
    set: (el: string | void) => PublicAPI,
}