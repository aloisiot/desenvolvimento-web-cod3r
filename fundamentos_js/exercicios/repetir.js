function  repeticao(aSerRepetido, numeroDeRepeticoes) {
    let resultado = []

    for (let i = 0; i < numeroDeRepeticoes; i ++)
        resultado.push(aSerRepetido);

    return resultado;
}

console.log(repeticao('aaaa', 3));


function incrementa(numero) {
    let texto = ''

    for (i = 0; i < numero; i ++)
    texto += '+';

    return texto
}

console.log(incrementa(3));
