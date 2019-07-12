export class two2 {
  constructor(num) {
    this.num = num
    this.yy = 777
  }
  asd(val) {
    console.log(this.num + this.yy, val)
  }
}

export default class two {
  constructor(opt) {
    this.opt = opt
    this.init()
  }
  init() {
    console.log(this.opt)
  }
}
// module.exports = test