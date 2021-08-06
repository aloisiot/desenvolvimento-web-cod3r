const fs = require('fs');
const path = require('path');

function lerArquivo(conteudo) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        });
    });
}

const caminho = path.join(__dirname, 'dados.txt');

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linha => linha.join(', '))
    .then(conteudo => `O conteudo final é ${conteudo}.`)
    .then(console.log)