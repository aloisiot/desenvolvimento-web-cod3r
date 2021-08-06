const quaseArray = {0: 'Bia', 1: 'Ana', 2:'João'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Bia', 'Ana', 'João']
console.log(meuArray, quaseArray.toString())