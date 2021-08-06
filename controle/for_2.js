const nota = [2.3, 7.7, 8.1, 9.9];

for(let i in nota) {
    console.log(i,nota[i]);
}

const pessoa = {
    nome: 'Ana',
    Sobrenome: 'Teixeira',
    idade: 53
}

for (atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`);
}