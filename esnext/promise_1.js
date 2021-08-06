const primeiroElemento = element => element[0];
const minusculo = letra => letra.toLowerCase();

new Promise(function(resolve) {
    resolve(['Ana', 'Julia', 'Carine']);
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(minusculo)
    .then(console.log);