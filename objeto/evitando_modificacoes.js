// Object.preventExtensions.
const produto = Object.preventExtensions({
    nome: 'Produto', preco: 2.99
});

console.log('Extensivel:', Object.isExtensible(produto));
produto.nome = 'Borracha escolar.'
produto.ID = 200;
delete produto.preco;
console.log(produto);

// Object.seal.
const pessoa = Object.seal({ nome: 'Joana', idade: 32 });

console.log('Selado:', Object.isSealed(pessoa));
pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 16;
console.log(pessoa);

// Object.freeze => completamente inalteravel.