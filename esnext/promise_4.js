function gerarNumero(min, max, tempo) {
    if (min > max) [max, min] = [min, max];

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio)
        }, tempo)
    });
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumero(1, 60, 1000),
        gerarNumero(1, 60, 500),
        gerarNumero(1, 60, 3000),
        gerarNumero(1, 60, 2000),
    ])
}

console.time('promise');

gerarVariosNumeros()
.then(console.log)
.then(() => console.timeEnd('promise'));