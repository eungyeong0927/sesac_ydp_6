// 구조분해 할당
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ["a", "b", "c"];

// const [one, two, three, four, five] = arr1;
// console.log(one, two, three, four, five);

// const [x, y, z, alpha] = arr2;
// console.log(x, y, z, alpha);

////////////////////////////////////////////////////////////////////

// // 변수 값의 교환, ( 예전엔 2개의 변수값을 교환할 때는 3개의 변수가 필요했음 )
// let num1 = 1;
// let num2 = 2;

// console.log(`Before: ${num1}, ${num2}`);
// [num1, num2] = [num2, num1];
// console.log(`After: ${num1}, ${num2}`);

// // default값 지정
// const lists = ["apple", "grape"];
// [f1, f2, f3 = "orange"] = lists;
// console.log(f1, f2, f3);

/////////////////////////////////////////////////////////////////////

// 객체(object) : { key : value }
const obj = {
    title: "엘리먼트",
    content: "fun",
    num: 5,
};

// 표기법
console.log(obj.title, obj.content, obj.num);
console.log(obj["title"], obj["content"], obj["num"]);

// 객체 구조 분해 (key값과 변수명을 같게 해줘야됨)
const { num, title, content, star = 1000 } = obj;
console.log(num, title, content, star);

const { a1, a2, a3 } = obj;
console.log(a1, a2, a3); // undefined 출력, key 값과 변수명이 다르기 때문에

const lectureInfo = {
    name: "Codding on",
    part: "web",
    leader: "Kim",
};

//console.log(lectureInfo);
function getInfo(lecture) {
    const { name, part, leader } = lecture;
    const output = `${name}강의는 ${part}개발을 공부합니다. 리더는 ${leader}입니다.`;
    return output;
}

console.log(getInfo(lectureInfo));
