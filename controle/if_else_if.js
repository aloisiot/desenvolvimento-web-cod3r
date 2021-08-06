Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra!');
    } else if(nota.entre(7, 8.99 )) {
        console.log('Aprovado!');
    } else if (nota.entre(4, 7.99)) {
        console.log('Recuperação!');
    } else if (nota < 4 && nota >= 0) {
        console.log('Reprovado!');
    } else {
        console.log('Nota invalida!')
    }
}

imprimirResultado(5);
imprimirResultado(11);
imprimirResultado(-1);
imprimirResultado('6');