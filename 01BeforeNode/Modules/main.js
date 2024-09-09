console.log('learning modules');

/*
import {sum,sub} from './calculator.js'
import {sum as add} from './script.js'
// import {default as Salman} from './whoami.js'
import sayMyName from './whoami.js';
*/

import * as combined from './combined.js';
// import { sayHi, sayRaj } from './greeting.js';
// import { sayHi,sayRaj } from './greeting.js';



console.log(combined.calc.sum(3,3));
console.log(combined.calc.sub(5,4));
console.log(combined.channelName());

if(true){ 
   const {sayHi,sayRaj}=await import('./greeting.js');
   sayHi();
   sayRaj();
}
// console.log(add(2,3))
  