// ES8: Objetc.values/Object.entries.
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na notação literal.
const nome = 'Carla';
const pessoa = {
    nome,
    ola() {
        return 'Ola!!';
    }
}

console.log(pessoa.ola(), pessoa.nome);

// Class
class Animal {};
class Cachorro extends Animal {
    latir() {
        return 'Au au';
    }
}

console.log(new Cachorro().latir());