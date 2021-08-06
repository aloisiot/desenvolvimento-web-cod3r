function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}

const obj = {
    nome: 'Mario',
    proffisao: 'Mecânico'
}

console.log(objetoParaArray(obj));