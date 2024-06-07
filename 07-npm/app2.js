const http = require("http");
http.createServer((req, res) => {
    var url_1 = req.url;
    res.writeHead(200, { "content-Type": "text/html; charset=utf-8" });
    res.write("<h2>hello 은경</h2>");
    res.end(`<p>${url_1}</p>`);
}).listen(3000, () => {
    console.log("3000번 서버 연결");
});
