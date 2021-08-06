const a = 28;
const b = 10;
const operacao = '/';

let resultado;

if (operacao === '+') {
    resultado = a + b;
}
else if (operacao === '-') {
    resultado = a - b;
}
else if (operacao === '*') {
    resultado = a * b;
}
else if (operacao === '/') {
    resultado = a / b;
}

console.log(resultado);