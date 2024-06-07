const http = require("http");
const fs = require("fs"); // 파일 관리 모듈, 내장 함수

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html"); // wirteHeader랑 같음
    fs.readFile("./views/index.html", (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});
server.listen(8000, () => {
    console.log("8000서버 실행");
});
