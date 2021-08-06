// Implementando reduce.

Array.prototype.reduce2 = function (callback, inicial) {
    indiceInicial = inicial ? 0 : 1
    acumulado = inicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulado = callback(acumulado, this[i], i, this)
    }
    return acumulado
}

const soma = (total, atual) => total + atual
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))