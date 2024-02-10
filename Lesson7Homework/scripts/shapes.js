class Shape {
  constructor(name) {
    this.name = name;
  }
  area() {
    console.log("Area calculation not implemented for generic shape.");
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super();
    this.name = name;
    this.radius = radius;
  }
  area() {
    return `Area of the ${this.name} is ${Math.PI * this.radius * 2}`;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super();
    this.name = name;
    this.width = width;
    this.height = height;
  }
  area() {
    return `Area of the ${this.name} is ${this.width * this.height}`;
  }
}

class Triangle extends Shape {
  constructor(name, base, height) {
    super();
    this.name = name;
    this.base = base;
    this.height = height;
  }
  area() {
    return `Area of the ${this.name} is ${(this.base * this.height) / 2}`;
  }
}

let circle = new Circle("Circle", 2);
let rectangle = new Rectangle("Rectangle", 10, 5);
let triangle = new Triangle("Triangle", 10, 2);

console.log(circle.area());
console.log(rectangle.area());
console.log(triangle.area());    
