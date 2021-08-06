function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
        resultado.push([chave, objeto[chave]])
    return resultado
}

const obj = {
    nome: 'Mario',
    proffisao: 'Mecânico'
}

console.log(objetoParaArray(obj));