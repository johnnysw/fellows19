let a = 5;
let add = (x, y) => x + y;

let arr = [5,6,7];
for(let item of arr){
    console.log(item);
}

let b = 6;

let oUl = document.querySelector('#ul1');
let aLi = document.querySelectorAll('#ul1 li');
for (let i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onclick = function () {
        console.log(i);
    };
}

