// pessoa -> 123 -> {...}
const pessoa = { nome: 'Pedro'};
pessoa.nome = 'jose';
console.log(pessoa);

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Dalila'};

Object.freeze(pessoa);

pessoa.nome = 'Zefa';
pessoa.end = 'Rua sem saida';
delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConst = Object.freeze({nome: 'Clara'});
pessoaConst.nome = 'Maria';
console.log(pessoaConst);