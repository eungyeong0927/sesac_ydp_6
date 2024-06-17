// JSON , (JSON 에서는 후행쉼표 X)
const car = `{
"model" : "IONIQ 5",
"company" : "HYUNDATI",
"price" :  500000,
"year" : 2023,
"isElectricCar" : true,
"options" : ["side mirror", "smart sensor", "built-in cam"]
}`;

console.log(car); // format: JSON

// 역직렬화(deserialize) : JSON.parse() => 통신하여 받은 데이터를 객체로 변환
// json to js obj
const obj = JSON.parse(car);
console.log(obj);

// obj 변수는 js object이므로,
// .(dot)/[] 연산자를 이요해 키 값에 접근 가능
console.log(obj.model);
console.log(obj.price);
console.log(obj.hello); // undefined (hello라는 키 값이 존재하지 않기 때문)

// 직렬화(serialize) : JSON.stringify() => 통신하기 쉬운 포맷(JSON)으로 변환
// js oby to json
const json = JSON.stringify(obj);
console.log(json, typeof json);

// json 변수는 JSON 형태의 "문자열(string)"이므로,
// .(dot)/[] 연산자를 이요해 키 값에 접근 불가
console.log(json.model);
console.log(json.price);
console.log(json.hello);

// stirng 타입에 쓸 수 있는 내장메서드들은 쓸 수 있음
console.log(json.split(""));
console.log(json.toUpperCase());
