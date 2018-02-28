const a = parseFloat(prompt('enter first number'));
const b = parseFloat(prompt('enter second number'));
const c = parseFloat(prompt('enter third number'));

function quadraticEquation(a,b,c){
    let discrim = b ** 2 - (4 * a * c);
    if(discrim > 0){
        const x1 = (-b + Math.sqrt(discrim))/(2 * a);
        const x2 = (-b - Math.sqrt(discrim))/(2 * a);
        return `x1 = ${x1}, and x2 = ${x2}`;
    }
    else if(discrim === 0){
        const x3 = - b / (2 * a);
        return `x = ${x3}`
    }
    else{
        alert(`x less than 0`);
    }
}
document.write(quadraticEquation(a,b,c))