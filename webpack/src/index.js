import css from './css/index.css';
import sass from './css/style.scss';
var a = 5;
var oDiv1 = document.querySelector('#div1');
oDiv1.innerHTML = 'Hello World123456!';

oDiv1.className = 'aa';

let b = 6;
class People{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    showName(){
        console.log(this.name);
    }
    static fn(){

    }
}

let p1 = new People('zs', 18);
p1.showName();
People.fn();


