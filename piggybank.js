
// Piggy Bank
// - Content
// - insert(coin)
// - remove() //all
class PiggyBank{
    constructor(){
        this.content = 0;
    }
    insert(coin){
        this.content += coin;
    }
    remove(){
        const all = this.content;
        this.content = 0;
        return all;
    }
}
let p = new PiggyBank();
p.insert(25);
p.insert(25);
p.insert(25);
console.log(p.content === 75); // true? yes!
console.log(p.remove());
console.log(p.content === 0); // true? yes!