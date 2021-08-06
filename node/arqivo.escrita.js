const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1299.9,
    desconto: 0.10
}

fs.writeFile(__dirname + '/arrquivo_gerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})