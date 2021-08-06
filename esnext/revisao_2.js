const { forEach } = require("lodash");

// Arrow Function.
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this).
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parametro default.
function log(texto = 'Node') {
    console.log(texto);
}

log();
log('text');

// Operador Rest.
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}

console.log(total(3, 4, 5, 6, 7, 8));