// 디렉토리 읽기
const fs = require("fs");
// 매개변수 첫 번째는 읽을 경로
fs.readdir("./", (err, files) => {
    if (err) console.log("에러", err);
    else console.log("결과는", files);
});

// 파일 생성
// fs.writeFile("mynewfile1.txt", "Hello world", (err, files) => {
//     if (err) {
//         throw err;
//     }
//     console.log("파일이 생성됨");
// });

// open(), w를 이용해서 파일 생성
// fs.open("mynewfile2.txt", "w", function (err, file) {
//     if (err) throw err;
//     console.log("파일이 생성됨");
// });

// appendFile() : 내용 추가, 기존 파일을 전제
fs.appendFile("mynewfile1.txt", "Kim", function (err) {
    if (err) throw err;
    console.log("파일이 생성됨");
});
