// 조건문

// if문
if (5 > 2) {
    console.log("집가고 싶다..");    
}

let number1 = Number(prompt("숫자1를 입력해주세요!"));
// 1. prompt() 로 사용자로부터 값을 입력 받고 (문자열)
// 2. Number() 문자열 -> 숫자형 형변환

// 아래와 같음
// let number1 = prompt("숫자2를 입력해주세요!");
// number1 = Number(number1);

if(number1 > 10){
    console.log("입력한 수는 10보다 크다.");
}else if(number1 === 10){
    console.log("입력한 수는 10이다!");
}
else{
    console.log("입력한 수는 10보다 작다.");
}

// if (number > 100 || number < 0) {
//     console.log('입력값이 잘못되었습니다. 숫자의 범위는 0 ~ 100');
// } else if (number >= 90) {
//     console.log('A');
// } else if (number >= 80) {
//     console.log('B');
// } else if (number >= 70) {
//     console.log("C");
// } else if (number >= 60) {
//     console.log("D");
// } else {
//     console.log('F');
// }

// 중첩 if문
let userId = "user01"
let userPw = "1234"

function loginUser(){
    let InputId = prompt("아이디 입력");
    let InputPw = prompt("비밀번호 입력");

    // Q) userId와 inputId가 같다면?
    // -- userPw와 inputPw를 비교
    // Q) inputId에 빈값이 입력이 됐다면?
    // -- '아이디 입력 안함' 이라는 문구를 반환.
    // Q) 두 경우가 아니라면? (inputId가 틀렸을 때)
    // -- '아이디 틀림' 문구를 반환.

    if(userId === inputId) {
        if(userPw === inputPw) {
            return '로그인 성공';
        } else {
            return '비번 오류! 로그인 실패';
        }
    } else if (inputId === '') {
        return "아이디 입력 안함!";
    } else {
        return "아이디 틀림! 로그인 실패";
    }
}

const result = loginUser();
// -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
console.log(result);