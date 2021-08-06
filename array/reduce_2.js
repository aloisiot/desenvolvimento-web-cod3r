const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Ana', nota: 8.8, bolsista: true },
    { nome: 'Pedro', nota: 9, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false }
]

// Todos os alunos são bolsistas?
const todosBolsistas = (acumulado, atual) => acumulado && atual

// algum aluno é bolsista?

const algumBolsista = (acumulado, atual) => acumulado || atual

// Retornar resultado:

if (alunos.map(a => a.bolsista).reduce(todosBolsistas)) {
    console.log('Todos os alunos são bolsistas!')
} else if (alunos.map(a => a.bolsista).reduce(algumBolsista)) {
    console.log('Algum aluno é bolsista!')
}