const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public")); // public폴더를 내가 static파일을 가져오는 폴더로 등록한다

app.get("/", (req, res) => {
    res.render("index", { title: "HOME" });
});
app.get("/about", (req, res) => {
    res.render("about", { title: "ABOUT" });
});
app.get("/create", (req, res) => {
    res.render("create", { title: "CREATE" });
});

// 지정된 경로 외 경로일 때
app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(8000, () => {
    console.log("http://localhost:8000");
});
