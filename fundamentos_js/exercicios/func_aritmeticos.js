const operacao = {
    soma: (x, y) => x + y,
    sub: (x, y) => x - y,
    mult: (x, y) => x * y,
    divisao: (x, y) => x / y,
    modulo: (x, y) => x % y,
}

console.log(operacao.soma(4, 5));
console.log(operacao.sub(4, 5));
console.log(operacao.mult(4, 5));
console.log(operacao.divisao(4, 5));
console.log(operacao.modulo(4, 5));