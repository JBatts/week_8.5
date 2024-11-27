class Make{
    name = "generic";
}
class Ford extends Make{
    name = "Ford";
}

class Car{
    make = Make;
    constructor(){
        this.trying_products = [];
    }
}

class Mustang extends Car{
    make = Ford;
    image = "mustang.png";
}

class Product{
    constructor(name, make, image){
        this.name = name;
        this.make = make;
        this.image = image;
    }
}

class Store{
    constructor(products){
        this.products = products;
    }
    findCompatibleProducts(car){
        return;
    }
    getCompositeImage(car){}
}

class MyCar{
    constructor(carKind, year, color){
        this.carKind = carKind;
        this.year = year;
        this.selections = new Selections(color);
    }
}

class Selections{
    constructor(defaultColor, bodyKit, spoiler, mirrors){
        this.bodyKit = bodyKit;
        this.spoiler = spoiler;
        this.mirrors = mirrors;        
        this.bodyKitColor = defaultColor;
        this.spoilerColor = defaultColor;
        this.mirrorsColor = defaultColor;
    }
}
// Test

let s = new Store([
    new Product("Spolier 200",new Mustang(),"spoiler200.png"),
    new Product("Spolier 800",new Mustang(),"spoiler800.png"),
]);
mine = new MyCar(Mustang, 1967, "metalic blue")
let list = s.findCompatibleProducts(Mustang, "spolier");
mine.selections.spoiler = list[0];
image = s.getCompositeImage(mine);


