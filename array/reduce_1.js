const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Ana', nota: 8.8, bolsista: true },
    { nome: 'Pedro', nota: 9, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0 /* <--- valor inocial */)

console.log(resultado)

const notasMedia = parseFloat((resultado / alunos.length).toFixed(2))
console.log('Média:',notasMedia)