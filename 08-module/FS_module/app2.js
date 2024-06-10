// 파일삭제
const fs = require("fs");
fs.unlink("mynewfile2.txt", function () {
    consolg.log("파일삭제 완료");
});

// 파일 이름 변경
fs.rename("mynewfile1.txt", "renamefile2.txt", (err) => {
    if (err) throw err;
    console.log("파일 이름 변경 완료");
});
