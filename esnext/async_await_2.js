function gerarNumero(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max];

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido.');
        } else {
            resolve(aleatorio);
        }
    })
}

async function gerarNumSorteados(quantidadeNum, tentativa = 1) {
    try{
        const numeros = [];
        for (let_ of Array(quantidadeNum).fill()) {
            numeros.push(await gerarNumero(1, 60, numeros));
        }
        return numeros;
    } catch (e) {
        if (tentativa > 10){
            throw `ERRO: ${e}`;
        } else {
            return gerarNumSorteados(quantidadeNum, tentativa + 1);
        }
    }
}

gerarNumSorteados(15)
    .then(console.log)
    .catch(console.log);