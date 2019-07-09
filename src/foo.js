const test = (opt) => ({
  ...opt,
  key: '2'
})
const val = test({
  a: 'a',
  b: 'b',
  key: '1'
})

export default test;