const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
}

imprimirResultado(9);
imprimirResultado(3);
imprimirResultado('string');    // Cuidado com o fato de JS ser fracamente tipada.