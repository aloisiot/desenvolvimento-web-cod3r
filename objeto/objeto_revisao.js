// Coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 55,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 222
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 49,
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

carro.proprietario.endereco.numero = 1200;
carro['proprietario']['endereco']['logradouro'] = 'Rua Azaléia';
console.log(carro);

// delete carro.condutores;
delete carro.proprietario.calcularValorSeguro;
delete carro.proprietario.endereco;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);