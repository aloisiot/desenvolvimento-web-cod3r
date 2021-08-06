const cliente = {
    codigo: 2562,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua Das Flores',
        numero: 123,
        complemento: 'Apto 230 Bloco B',
        pontoRef: [
            {nome: 'Hospital X', muitoProximo: true},
            {nome: 'Shopping y', muitoProximo: false},
        ]
    },
    filhos: ['Gustavo', 'Julia'],
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontoRef[0].muitoProximo)