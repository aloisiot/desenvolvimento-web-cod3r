// Operador(...) rest(juntar)/spread(espalhar).
// Usar REST como parametro para Função.

//  SPREAD com Objetos.
const funcionario = { nome: 'Maria', salario: 12345.67};
const clone = {ativo: true, ...funcionario};

console.log(clone);

//  SPREAD com Array.
const turmaA = ['Joao', 'Julia', 'Clara', 'Alice'];
const turmaFinal = ['Mariana', ...turmaA, 'Lucas'];
console.log(turmaFinal);