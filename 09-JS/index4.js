// &&(and) ||(or) 단축평가

const x = 5;
const result = x || 100;
console.log(result);

const y = 7;
const result2 = x < y && "x보다 y가 큼";
console.log(result2);

// falsy한 값: undefined, null, 0, false, "", NaN
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);
