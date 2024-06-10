const http = require("http");
const url = require("url");
const fs = require("fs");

// url 모듈은 url 정보를 객체로 가져와서 분석(parse)하거나, url 객체를 문자열로 바꿔주는 기능(format, resolve)을 수행
/*
var addr = "http://localhost:8000/example.htm?year=2024&month=feb";
// 주소의 ? 뒤는 쿼리
const q = url.parse(addr, true);
// console.log(q);
console.log(q.pathname); // 경로와 파일이름/example.htm
console.log(q.search); // ?year=2024&month=feb
var qdata = q.query;
console.log(qdata); // { year: "2024", month: "feb" }
console.log(qdata.month); // 기존 쿼리에서 pw에 해당하는 것만 출력
*/

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 Not found");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
}).listen(8000, () => {
    console.log("8000 서버실행");
});
