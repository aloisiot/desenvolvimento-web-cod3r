// Não aceita repetição; não indexada.
const times = new Set();
times.add('São Paula');
times.add('Flamengo').add('Cruzeiro').add('Atlético');
times.add('Corinthians');
times.add('Santos');    // Não aceita repetição.

console.log(times);
console.log(times.size);
console.log(times.has('flamengo'));
console.log(times.has('Flamengo'));
times.delete('Santos');
console.log(times.has('Santos'));

const nomes = ['Adriana', 'Simara', 'Lúcia', 'Adriana'];
const nomesSet = new Set(nomes);
console.log(nomesSet);