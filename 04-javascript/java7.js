// 조건문

/*
// if문
console.log("=========if문============");
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

    if(userId === InputId) {
        if(userPw === InputPw) {
            return '로그인 성공';
        } else {
            return '비번 오류! 로그인 실패';
        }
    } else if (InputId === '') {
        return "아이디 입력 안함!";
    } else {
        return "아이디 틀림! 로그인 실패";
    }
}

const result = loginUser();
// -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
console.log(result);

// ---------------------------------------------------
// Switch문
// - 하나 이상의 case 문으로 구성.
// - default가 필수는 아니지만, 사용하길 권장. = if문의 else 같은 존재.
//   ㄴ switch문 내의 모든 case가 매칭되지 않을 때 실행.
// - 여러 개의 case 문을 묶을 수도 있다.
// - break;
//   ㄴ 조건을 빠져나갈 때 사용하는 키워드.

console.log("=========switch문============");

let a = 3;

switch(a){
    case 1:

    case 2:

    case 3:
        console.log("a가 1 ~ 3 이군요");
        break;
    case 4:
        console.log("a가 4 이군요");
        break;
    case 5:
        console.log("a가 5 이군요");
        break;
    default:
        console.log("a가 무슨 값인지 모르겠습니다");
        break;
}

// *실습*
// Quiz) 학점 계산기
// 조건) 0~100외 숫자는 들어오지 않는가도 가정
// 힌트) number / parseInt(), 10

console.log("=========switch문 학점실습============");

let score = Number(prompt("점수를 입력해주세요"));
let grade;

if(score>=0 && score<=100){
    switch(parseInt(score/10,10)){
        case 10:
        case 9:
            grade="A";
            break;
        case 8:
            grade="B";
            break;
        case 7:
            grade="C";
            break;
        case 6:
            grade="D";
            break;
        case 5:
            grade="E";
            break;    
        default:
            grade="F"
            break;
    }    

    console.log("학점은 " +grade +"입니다.");1
}
else{
    console.log("숫자를 다시 입력해주세요");

}


// 삼항 연산자
// 조건식 ? A : B
// 조건식이 참이면 "A" 거짓이면 "B"
// if 문을 간단하게!

console.log("=========삼항연산자============");

let num = 5;
// 일반 if문
if(num %2 === 1){
    console.log("홀수");
}else{
    console.log("짝수");
}

// 삼향 연산자
num % 2 === 1? console.log("홀수"):console.log("짝수");
*/

let now = new Date();
let hours = now.getHours();
// let hours = new Date().getHours();
hours >= 12? console.log("오후"):console.log("오전");



const now2 = new Date();
const hours2 = now2.getHours(); 
console.log(hours2); // 13

const amOrPm = hours2 < 12 ? '오전' : '오후';

console.log(`현재 시각은 ${amOrPm} ${hours2 % 12 || 12}시 입니다.`);
// hours % 12 => 0 ~ 11  

console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean(11)) // true