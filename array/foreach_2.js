Array.prototype.meuForEach = function (callback) {
    for (i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const reprovados = ['Tereza', 'Jaine', 'Lucas', 'Letícia']

reprovados.meuForEach((nome, indice, array) => console.log(`${indice + 1}) ${nome}`, array));