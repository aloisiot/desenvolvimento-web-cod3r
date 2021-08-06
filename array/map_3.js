// Implementando map.

Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.50 }',
    '{ "nome": "Caderno", "preco": 12.90}',
    '{ "nome": "Caneta", "preco": 1.20}',
    '{ "nome": "Estojo", "preco": 35.90}',
]

// Retorna apenas os preços.

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObj).map2(apenasPreco)
console.log(resultado)