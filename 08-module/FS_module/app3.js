// 파일 읽기
const fs = require("fs");
// fs.readFile("./input.txt", "utf-8", function (err, data) {
//     console.log(data);
// });
// console.log("파일 읽기 완료");

const data = fs.readFileSync("./input.txt", "utf-8");
console.log(data);
console.log("파일 읽기 완료");

/**
 * fs.readFile()은 비동기식 함수이기 때문에 "파일 읽기 완료" 호출 뒤에 readFile()결과가 출력된다
 *
 *
 * */
