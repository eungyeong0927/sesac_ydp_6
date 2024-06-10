const add1 = require("./m1");
console.log(add1(1, 2));

// const m2_object = require("./m2");
// console.log(m2_object.add(1, 2));
// console.log(m2_object.subtract(10, 5));

const m2_object = require("./m2");
const { add, subtract } = m2_object;
console.log(add(1, 2));
console.log(subtract(10, 5));
