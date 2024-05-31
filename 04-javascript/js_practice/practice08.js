let i = 0;

while (i < 100) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i);
    }
    i++;
}

console.log("----------------------------------");

i = 0;
let num1 = prompt("숫자를 입력하세요");
while (i < num1) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i);
    }
    i++;
}

console.log("-------------------------------");

let sum = 0;
for (i = 0; i <= 100; i++) {
    if (i === 0) {
        continue;
    } else if (i % 2 === 0 || i % 5 === 0) {
        sum += i;
        console.log(`i = ${i}, sum = ${sum}`);
    }
}
console.log("sum은 " + sum + "입니다");
