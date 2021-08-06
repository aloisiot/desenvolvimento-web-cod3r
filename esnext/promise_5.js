function funcionarOuNao(valor, probabilidade) {
    return new Promise((resolve, reject) => {
        try {
            con.log('tst...');
            if (Math.random() < probabilidade) {
                reject('Ocorreu um erro...');
            } else {
                resolve(valor);
            }
        } catch (e) {
            reject(e);
        }
    });
}

funcionarOuNao('Sucesso!!!', 0.5)
    .then(
        v => console.log(v),
        err => console.log(`Erro esp.: ${err}`)
    )
    .catch(err => console.log(`Erro geral: ${err}`))