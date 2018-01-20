class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + '在吃!');
    }
}
let p1 = new People('ww', 20);
console.log(p1.name);
p1.eat();