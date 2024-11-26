
class Animal { // Animal is the base class, the parent class of DOG
    DEFAULT = "Animal"
    constructor(kind){ // Called when a new instance is created
        this.kind = kind ? kind : this.DEFAULT;
    }
    speak(){
        console.log(`You better ask about me I am ${this.kind}`)
    }
}

class Dog extends Animal{ // Dog is the child of Animal and the parent of PetDog
    DEFAULT = "cute puppy"
    constructor(kind){
        super(); // Call parent constructor of animal
        this.kind = kind ? kind : this.DEFAULT;
    }
}

class PetDog extends Dog{ // PetDog is just the child of Dog
    constructor(name){
        super(); // Calls parent constructor of Dog
        this.name = name;
    }
    speak(){ // Overides the default speak() method
        console.log(`I am a ${this.kind}, and my name is ${this.name}`)
    }
}



let a = new Animal("The king of this shit") // If this is set to nothing plug in the default
a.speak();
// If I use the function get speak I can call it a different way
// a.speak;

let d = new Dog("Husky");
d.speak();

let pup = new PetDog("Harley");
pup.speak();

let c = new Animal("Evil Kitty")
let animals = [c, d, pup]
// For each animal "a" have that animal speak()
animals.forEach(a=>a.speak());