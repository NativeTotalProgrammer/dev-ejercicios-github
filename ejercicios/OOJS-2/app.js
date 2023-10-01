class Shape {
  constructor(_name, _side, _sideLength) {
    this.name       = _name;
    this.side       = _side;
    this.sideLength = _sideLength;
  };

  get calcPerimeter() {
    const perimeter = this.side * this.sideLength;
    return `The perimeter of the ${this.name} is ${perimeter}`;
  }
};

class Square extends Shape {
  constructor(_sideLength2) {
    super('square', 4, _sideLength2);
  };
  
  get calcArea() {
    const area = this.sideLength * this.sideLength;
    return `The area of the square is ${area}`;
  };
};

const square = new Square(5);

console.log(square.calcPerimeter);
console.log(square.calcArea);
