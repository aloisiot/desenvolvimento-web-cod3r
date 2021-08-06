function gerarNumero(min, max) {
    if (min > max) [max, min] = [min, max];

    return new Promise(resolve => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio);
    })
}

gerarNumero(1, 60).then(num => num * 10)
.then(numX10 => `O número gerado X 10 resulta em ${numX10}!`)
.then(console.log);