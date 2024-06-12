// 클래스
class House {
    constructor(year, name, window) {
        this.year = year;
        this.name = name;
        this.window = window;
    }
    getAge() {
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요!`);
    }
    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
    }
}

// 클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정해야 된다
const house1 = new House(1990, "롯데", 1);
// console.log(house1);
// console.log(typeof house1);
// console.log(house1.year);
// house1.getAge();
// house1.getWindow();

class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
    }
    getWindow() {
        return `${this.name}아파트의 ${this.window}개의 창문은 ${this.windowMaker}에서 생산되었습니다`;
    }
}

const apt1 = new Apartment(2000, "삼환", 150, 23, "영림도어");
// console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());
apt1.getAge();
