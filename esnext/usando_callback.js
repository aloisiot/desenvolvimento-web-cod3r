// Sem promise...
const http = require('http');

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, resp => {
        let resultado = '';

        resp.on('data', dados => {
            resultado += dados
        });

        resp.on('end', () => {
            callback(JSON.parse(resultado));
        });
    });
}

let nomes = [];
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`));
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B ${aluno.nome}`));
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`));
            console.log(nomes);
        })
    })
})


// ABAIXO MINHA VERSÂO...

// let nomesTurmaA = [];
// let nomesTurmaB = [];
// let nomesTurmaC = [];
// 
// getTurma('A', alunos => {
//     nomesTurmaA = nomesTurmaA.concat(alunos.map(aluno => aluno.nome));
//     console.log('Turma A:', nomesTurmaA);
// });
// getTurma('B', alunos => {
//     nomesTurmaB = nomesTurmaB.concat(alunos.map(aluno => aluno.nome));
//     console.log('Turma B:', nomesTurmaB);
// });
// getTurma('C', alunos => {
//     nomesTurmaC = nomesTurmaC.concat(alunos.map(aluno => aluno.nome));
//     console.log('Turma C:', nomesTurmaC);
// });