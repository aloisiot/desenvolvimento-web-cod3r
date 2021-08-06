// Factory function.
function produto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.15,
    }
}

const produto1 = produto('Computador', 2800);
console.log(produto1);

// Funcao construtora.

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = 0.15;
    this.precoComDesconto = preco - (preco * this.desconto);
}

const prod1 = new Produto('Tablet', 1299.9);
console.log(prod1);