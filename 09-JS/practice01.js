// const word1 = "abc";
// const word2 = "xyz";

// const wordsum = [...word1, ...word2];
// console.log(wordsum);

class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getArea() {
        return this.x * this.y;
    }
}
// let rec1 = new Shape(3, 4);
// console.log(rec1.getArea());

class Rectangle extends Shape {
    constructor(x, y) {
        super(x, y);
    }
    diagonal() {
        return Math.sqrt(x ** 2 + y ** 2);
    }
}

class Triangle extends Shape {
    constructor(x, y) {
        super(x, y);
    }

    getArea() {
        return (this.x * this.y) / 2;
    }
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    getArea() {
        return this.radius ** 2 * Math.PI;
    }
}

let rectangle = new Rectangle(3, 5);
let triangle = new Triangle(3, 3);
let circle = new Circle(3, 3, 5);
console.log(rectangle.getArea());
console.log(triangle.getArea());
console.log(circle.getArea());
