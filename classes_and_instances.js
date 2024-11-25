// Intro to Classes, instances, methods and properties
// OOP _Object Orient Programming

// Encapsulates variables and functions
class Rectangle{ // defines a new data type called Rectangle,
    // A new kind of thing

    // Factory that makes the instance
    constructor(height, width){
        // Me, Myself, and I
        // The instance is called by the keyword "this"
        // Properties:
        this.height = height;
        this.width = width;
    };

    // Method - a function inside a class
    getArea(){
        return this.height * this.width;
    };    
    get area(){
        return this.height * this.width;
    };
};
// create a new instance and assign it to the r variavle
const r = new Rectangle(12, 12);

// Call/Invoke r's inherited getArea() method
console.log(r.width, r.height, r.getArea()); 
// Or if the function is "get area"
console.log(r.width, r.height, r.area);

let s = new String();
console.log(s.length)

let t = ""; // same as calling new String("")
console.log(t.length);

let n = new Number();
console.log(n, n.toFixed(3));

let m = 0;
console.log(m, m.toFixed(3));