// Function declaration.

function soma(x, y) {
    return x + y;
}

// Function expression.
const sub = function(x, y) {
    return x - y;
}

// Name function expression.
const mult = function mult(x, y) {
    return x * y;
}

// Arrow function.
const divisao = (x, y) => x / y;

console.log(soma(6, 2));
console.log(sub(6, 2));
console.log(mult(6, 2));
console.log(divisao(6, 2));