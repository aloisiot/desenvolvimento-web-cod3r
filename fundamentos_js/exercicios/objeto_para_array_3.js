function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

const obj = {
    nome: 'Mario',
    proffisao: 'Mecânico'
}

console.log(objetoParaArray(obj));