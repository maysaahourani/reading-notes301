'use strict';
console.log ('we are alive ');
function myfun (){
    alert('welcome301d24');
}

let butt = document.getElementById('submit');
butt.addEventListener('click',myfun);

let arrowFunction = (name) => {
    let greet = `hello ${name}`;
    console.log ( ' I am an arrow function :',greet);

}

arrowFunction ('maysaa');
let greetName=(first,last)=> {
    return first + ' ' + last ;
}

console.log(greetName ('assel','asayeh'));