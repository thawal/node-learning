// import add from './math-esm.mjs';
// console.log(add(5,8))
// import math from './math-esm.mjs';
//for named imports var and func name must be same and held in {}
//for forth pattern we can also import as
//import * as math from './math-esm.mjs'
import {add, subtract} from './math-esm.mjs';//destructuring while importing
//destructureing the imported object 
// const{add,subtract}=math;
// console.log(math.add(4,5));
// console.log(math.subtract(4,5))
console.log(add(4,5));
console.log(subtract(4,5))