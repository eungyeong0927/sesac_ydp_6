/*

const http = require("http");
// console.log(http);
// http모듈이 갖고 있는 서버 만드는 기능을 사용해보자
const server = http.createServer();
server.listen(8000, function () {
    console.log("8000 포트에서 서버 실행중");
}) // 8000번 포트가 연결되면 뒤의 함수를 실행해라 라는 뜻, 이 함수가 바로 콜백함수이다.

*/

const http = require("http");
const server = http.createServer();
server.listen(8000, function () {
    console.log("서버실행");
});
