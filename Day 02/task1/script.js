class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw "can't take an object from abstract class";
        }
    }

    getArea() {
        throw "Method 'getArea()' Method is not implemented.";
    }

    getPerimeter() {
        throw "Method 'getPerimeter()' Method is not implemented.";
    }
}

// Circle class
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Rectangle class 
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}


// Square class
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return Math.pow(this.side, 2);
    }

    getPerimeter() {
        return 4 * this.side;
    }
}


// Output 
let circle = new Circle(5);
console.log("Circle Area:", circle.getArea());
console.log("Circle Perimeter:", circle.getPerimeter());

let rectangle = new Rectangle(6, 5);
console.log("Rectangle Area:", rectangle.getArea());
console.log("Rectangle Perimeter:", rectangle.getPerimeter());

let square = new Square(6);
console.log("Square Area:", square.getArea());
console.log("Square Perimeter:", square.getPerimeter());
