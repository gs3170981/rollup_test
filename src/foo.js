const test = (opt) => ({
  ...opt,
  key: '2'
})
// const val = test({
//   a: 'a',
//   b: 'b',
//   key: '1'
// })

export default test;
export function test2(opt) {
  return {
    ...opt,
    key: '2'
  }
};
// module.exports = test