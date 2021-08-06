function paresDeIndicePares(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i += 2) {
        const numeroPar = array[i] % 2 === 0;

        if (numeroPar)
            resultado.push(array[i])        
    }
        return resultado;
}

console.log(paresDeIndicePares([1,2,30,4,50,6]));