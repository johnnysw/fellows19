/* export let a = 5;
export const sum = (x, y) => x + y;

export class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log('我叫' + this.name);
    }
} */

/* let b = 6;
export default b; */

class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log('我叫' + this.name);
    }
}

export default People;
