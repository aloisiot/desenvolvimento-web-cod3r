const soma = function (x, y) {
    return x + y;
}

let imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(2, 2);
imprimirResultado(2, 6, soma);
imprimirResultado(10, 4, function (c, d) {
    return c - d;
})
imprimirResultado(5, 7, (x, y) => x * y);

const pessoa = {
    falar: function(){
        console.log('Opá!')
    }
}

pessoa.falar()