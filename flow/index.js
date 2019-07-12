declare module '@/foo.js' {
  declare
  export function test2(opt: Object): Object;

  declare
  export default {
    (opt: Object): Object
  };
}
declare module '@/two.js' {
  declare
  export class two2 {
    yy: number;
    // asd(val: num): Function;
    // 或
    asd: (val: number) => Function;
    constructor(num: number): void
  }

  declare
  export default class two {
    constructor(opt: Array < number | string > ): void
  }
}
declare module 'jquery' {
  declare
  export default {
    (opt: string): any
  };
}