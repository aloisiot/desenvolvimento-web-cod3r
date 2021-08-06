const alunos = [
    {nome:'Joana', nota: 9.9},
    {nome:'Davi', nota: 7.3},
    {nome:'Diana', nota: 7.3},
    {nome:'Lucia', nota: 7.3,}
]

// Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNotas = (aluno) => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNotas).reduce(soma)
console.log(total2 / alunos.length)