// Implementando filter.

Array.prototype.filter2 = function(callback) {
    newArray = []

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo', preco: 12.49 , fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false },

]

const frageis = p => p.fragil
const caros = p => p.preco >= 500

console.log(produtos.filter2(frageis).filter2(caros))