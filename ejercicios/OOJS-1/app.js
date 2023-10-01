class Shape {
  constructor(_name, _sides, _sideLength) {
    this.name       = _name;
    this.sides      = _sides;
    this.sideLength = _sideLength;
  };

  get calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    return `The perimeter of the ${this.name} is ${perimeter}`;
  };
};

const square = new Shape("square", 4, 5);
console.log(square.calcPerimeter);

const triangle = new Shape("triangle", 3, 3);
console.log(triangle.calcPerimeter);
