const pai = { nome: 'José', corCabelo: 'preto' }

const filha1 = Object.create(pai);
filha1.nome = 'Júlia';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Letícia', wiretable: false, enumerable: true }
});

console.log(filha2);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(`Atributo próprio: ${key}`) : console.log(`Por herança: ${key}`);
}