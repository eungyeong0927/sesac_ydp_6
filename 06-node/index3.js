// math2 모듈 불러와 객체에 넣기
// math2 에서 내보낸 모듈 이름과 반드시 같게 해줘야됨
const { add, PI, E } = require("./math2");

console.log(PI);
console.log(E);
console.log(add(2, 5));
