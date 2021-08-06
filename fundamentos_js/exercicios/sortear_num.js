function sorteio(num) {
    numSorteado = Math.ceil(100 * Math.random())
    return num == numSorteado ?
    `Parabéns! O número sorteado foi ${numSorteado}`:
    `Que pena! o número sorteado foi ${numSorteado}`;
}

console.log(sorteio(4));