function fatorial(x) {
    let resultado = x;
    
    for (i = 1; i < x; i++) {
        resultado *= i;
    }
    console.log(resultado);
}

fatorial(6);