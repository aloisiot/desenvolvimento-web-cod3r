function perfectNumb (n) {
    let soma = 0,
        divisor = 1,
        divisores = [];

    do {
        let resto = n % divisor;
        if (resto == 0) {
            soma += divisor;
            divisores.push(divisor)
        }
        divisor++;
    } while (divisor <= (n /2));

    if (soma == n) {
        console.log(`${n} é um número perfeito.`);
        console.log(`Conjunto dos divisores: ${divisores}.`)
    } else {
        console.log(`${n} não é um número perfeito.`);
    }
}

perfectNumb(6)