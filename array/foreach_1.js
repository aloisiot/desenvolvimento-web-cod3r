const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(aprovado => console.log(aprovado));

const imprimirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(imprimirAprovados);