import fetch from './foo.js';
import {
  version
} from '../package.json';

class a {}
class b {}
const arr = [{
  a: 1
}]
const arr2 = arr.map(item => ({
  key: item.a
}))

console.log(`version: ${version}`);
console.log(`val: ${fetch()}`);
console.log(`arr2: ${arr2}`);
console.log(`arr2: ${a}`);
console.log(`arr2: ${b}`);