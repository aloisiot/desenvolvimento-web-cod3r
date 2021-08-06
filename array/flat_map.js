const escola = [{
    nome: 'Turma M1',
    alunos: [
        {
            nome: 'Edvan',
            nota: 5.6
        }, {
            nome: 'Larissa',
            nota: 8.8
        }
    ]
}, {
    nome: 'Turma M2',
    alunos: [
        {
            nome: 'Diana',
            nota: 7.5
        }, {
            nome: 'Leticia',
            nota: 9
        }
    ]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)