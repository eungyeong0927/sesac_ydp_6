// Spread 연산자 ...
// 반복 가능한 객체에 사용하는 문법  => 배열, 유사배열, 문자열 등
// 객체의 요소에 접근해서 요소들을 하나씩 분리하고, 전개요소에 접근해 반환함

// const a = [1, 2, 3];
// const b = [4, 5];

// const spread = [...a, ...b];
// console.log(spread);

// const c = [..."HELLO"];
// console.log(c);
// const d = "HELLO".split("");
// console.log(d);

// // spread 연산자를 object에 사용
// const chip = {
//     base: "chip",
//     company: "lotte",
// };

// const potatochip = {
//     ...chip,
//     flavor: "potato",
// };
// console.log(chip);
// console.log(potatochip);

// ===========================================================
// rest 파라미터
// 함수에서 사용시
const values = [10, 20, 30, 40, 50, 60];
function get(a, b, c, ...rest) {
    // 순서대로 읽고 나머지는 rest에 넣음
    console.log(a, b, c);
    console.log(rest);
}
get(...values);

const icecream = {
    company: "lotte",
    flavor: "choco",
    price: 1000,
};
const { flavor, ...abc } = icecream;
console.log(flavor);
console.log(abc);

const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one, two, ...rest2] = number;
console.log(one, two);
console.log(rest2);
