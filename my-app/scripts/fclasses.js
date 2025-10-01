//define rectangle and square classes
//define rectangle class with constructor (width, height) and method getArea()
class Rectangle {
    constructor(width, height) {
        //store width and height
        this.width = width;
        this.height = height;
    }
    //method calculates area of rectangle
    getArea() {
        return this.width *this.height;
    }
}

//defines square class that extends rectangle class
class Square extends Rectangle {
    //constructor takes one arguement ('side')
    constructor(side) {
        //calls super class constructor
        super(side,side);
    }

    //method calculates perimeter of square
    getPerimeter() {
        return 4 * this.width;
    }
}

//creates rectangle object
const rect = new Rectangle(10, 20);
//calls getArea() method and displays the result
console.log('Rectangle area: ' + rect.getArea());

//creates square object
const square = new Square(25);

//calls getPerimeter() method  and displays the result
console.log('Square perimeter: ' + square.getPerimeter());
//calls getArea() method and displays the result
console.log('Square area: ' + square.getArea());

/*
 * Expected output:
 *
 * Rectangle area: 200
 * Square perimeter: 100
 * Square area: 625
 */