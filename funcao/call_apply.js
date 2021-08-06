function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.20,
    getPreco
}

global.preco = 6000;
global.desc = 0.3;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.2 };
console.log(getPreco.call(carro, 0.17, '$'));
console.log(getPreco.apply(global,[0.17, '$']));