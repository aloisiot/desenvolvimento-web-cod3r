function retornaPares(array) {
    const resultado = [];
    for (let item of array)
        if (0 == item % 2) {
            resultado.push(item);
        }
        return resultado;
}

console.log(retornaPares([3, 2, 3, 4, 5, 6]));