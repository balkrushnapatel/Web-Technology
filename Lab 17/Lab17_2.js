const path = require('path');

console.log(path.dirname('C:/Users/patel/OneDrive/Desktop/WT PROGRAMS/Lab 17'));

console.log(path.basename('C:/Users/patel/OneDrive/Desktop/WT PROGRAMS/Lab 17'));

console.log(path.join('SEM 3','B.TECH'));

console.log(path.extname('C:/Users/patel/OneDrive/Desktop/WT PROGRAMS/Lab 17/Lab17_1.js'));

console.log(path.resolve('RAJKOT','GUJARAT'));

console.log(path.relative('RAJKOT','GUJARAT'));

const add = require('./module.js');

console.log(add(1,6));