function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase);
         // reject(frase); <= em caso de erro.
        }, segundos * 1000);
    });
}

falarDepoisDe(3, 'Que legal!')
    .then((frase => frase.concat('!!!')))
        .then(outraFrase => console.log(outraFrase))
            .catch(erro => console.log(erro));  // <= em caso de erro.