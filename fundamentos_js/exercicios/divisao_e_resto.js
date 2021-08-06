function divisao(dividendo, divisor) {
    quociente = dividendo / divisor;
    resto = dividendo % divisor;

    return console.log(`O quociente de ${dividendo} dividido por ${divisor} é ${quociente}, e o resto da divisão é ${resto}.`);
}

divisao(5,2)