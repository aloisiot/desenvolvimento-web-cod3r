const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);

console.log('\n')

fabricantes.forEach((nomes, indice) => console.log(`${indice + 1}. ${nomes}`));