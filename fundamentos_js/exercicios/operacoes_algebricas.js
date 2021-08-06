function calcular(a, operador, b) {
    let resultado;

    switch (operador) {
        case '+': resultado = a + b;
            break;
        case '-': resultado = a - b;
            break;
        case '*': resultado = a * b;
            break;
        case '/': resultado = a / b;
            break;
        default: resultado = 'Operação inválida!';
    }
    console.log(resultado);
}

calcular(3, '*', 3);