const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine중에 우리는 ejs를 쓸 거다!
// view engine에는 여러 종류가 있는데 ejs는 html에 반복문, 조건문 등을 활용할 수도 있음
// 실제론 html보단 이렇게 뷰 엔진을 활용하는 경우가 많음
app.set("views", "./views"); // views 는 요소, ./views 폴더에는 파일.ejs 로 저장

app.get("/", (req, res) => {
    res.render("index", { title: "홈" });
});
app.get("/about", (req, res) => {
    res.render("about", { title: "소개" });
});
app.get("/create", (req, res) => {
    res.render("create", { title: "작성" });
});

app.listen(PORT, () => {
    console.log("8000번 서버 실행");
});
