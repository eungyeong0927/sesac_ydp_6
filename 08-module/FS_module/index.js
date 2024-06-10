const fs = require("fs");
const path = require("path");
/*
fs.mkdir(path.join(__dirname, "demo"), (err) => {
    if (err) {
        console.err(err);
    }
    console.log("데모파일생성");
});
*/
fs.rmdir(path.join(__dirname, "demo"), (err) => {
    if (err) {
        console.err(err);
    }
    console.log("데모파일삭제");
});
