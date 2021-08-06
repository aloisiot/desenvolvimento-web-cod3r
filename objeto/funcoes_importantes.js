const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}

console.log(Object.keys(pessoa)); // Retorna as chaves de cada atributo.
console.log(Object.values(pessoa)); // Retorna os valores de cada atributo.
console.log(Object.entries(pessoa)); // Retorna os pares chave/valor de cada atributo.

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// Acrescenta um novo atributo definindo suas propriedades.
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Define se o atributo será enumeravel ou não.
    writable: false, // Define se o atributo será alteravel ou não.
    value: '10/10/2010'
})

pessoa.dataNascimento = '11/05/2009';
console.log(pessoa.dataNascimento);

// Object.assign (ES6).
const destino = { a: 1 },
      o1 = { b: 2 },
      o2 = {c: 3, a:4}
// Acrescenta atributos de outros objetos a um objeto de destino.
Object.assign(destino,o1, o2);
console.log(destino);

// Torna os atributos do Objeto competamente inaltenaveis.
Object.freeze(destino);
destino.b = 12;
console.log(destino.b);