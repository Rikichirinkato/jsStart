// let productTitle = 'Mazda';
// let productPrise = 40000;
// let productAvaible= true;

// document.write(productTitle);
// document.write('<br>');
// document.write(productPrise*0.9);
// document.write('<br>');
// document.write(productAvaible);
// document.write('<br>');

//console.log(1/0)

// const name = prompt('Enter Name');
// console.log('hello, ' + name)
// const age = parseInt(prompt());

// age > 17 ? console.log('adult') : console.log('child')

// function add(a,b,c){
//     return a+b+c;
// }
// const res = add(11,12,13)
// console.log(res)

let a = parseFloat(prompt('enter first number'));
let b = parseFloat(prompt('enter second number'));
let c = parseFloat(prompt('enter third number'));

function quadraticEquation(a,b,c){
    let discrim = b * b - (4 * a * c);
    if(discrim > 0){
        let x1 = (-b + Math.sqrt(discrim))/2 * a;
        let x2 = (-b - Math.sqrt(discrim))/2 * a;
        return `x1 = ${x1}, and x2 = ${x2}`;
    }
    else if(discrim === 0){
        let x3 = - b / (2 * a);
        return `x = ${x3}`
    }
    else{
        alert(`x less than 0`);
    }
}
document.write(quadraticEquation(a,b,c))