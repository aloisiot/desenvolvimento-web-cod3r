// #1 - Função COM parametro e SEM retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
console.log(somar(30, 56));

// #2 - Função COM parametro e SEM retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #3 - Função SEM parametro e COM retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #4 - Função SEM parametro e SEM retorno
function exibirHoraAtual() {
    console.log(new Date().getHours())
}

exibirHoraAtual();