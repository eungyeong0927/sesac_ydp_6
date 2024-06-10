/*
    js엔진, 구글 : v8 + c++ = node.js, 브라우저 밖에서 js
    모듈에는 사용자 만든 모듈, 시스템 모듈, 빌드인 모듈

    export해서 다른 파일이 불러와서 사용할 수 있게끔
    모듈단위, 불러올 때 require() -> commonJS, es6 ( import )
*/

// console.log(__dirname);
// console.log(__filename);
// const add = require("./add");
// console.log(add(1, 2));
// console.log("From index.js");

// scope(범위) 모듈은 각각의 범위를 가지고 있다
require("./batman");
require("./superman");
// 두 폴더의 변수명은 superHero로 같지만 같은 스코프 내가 아니기 때문에 상관 없음, 정상출력됨

// 모듈의 기초형태
// ()() 함수의 자동실행
(function () {
    const superHero = "Superman";
    console.log(superHero);
})(); // 즉시 실행 함수

// 모듈의 형태
/*
(function(exports, require, module, __filename, __dirname){
    코드
})()
*/
