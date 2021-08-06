function buscador1(chave, palavras) {
    resultado = []
        // Forma imperativa.
    for(palavra of palavras) {
        if(palavra.toUpperCase().includes(chave.toUpperCase())) {
            resultado.push(palavra)
        }
    }
    return resultado
}

function buscador2(chave, palavras) {
            // Forma declarativa.
    return palavras.filter(palavra => palavra.toUpperCase().includes(chave.toUpperCase()))
}

const profissoes = ['desenvolvedor', 'designer', 'contador', 'advogado', 'engenheiro']
console.log(buscador1('DES', profissoes))
console.log(buscador2('DES', profissoes))