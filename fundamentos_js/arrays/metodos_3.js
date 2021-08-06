const numeros = [1, 2, 3, 4, 5, 6];


function paraCadaElemento(elem, indice, array) {
    console.log(elem, indice, array);
}

numeros.forEach(paraCadaElemento);

numeros.forEach(function () {
    console.log('teste')
});

numeros.forEach(function (_, i) {
    console.log(i)
});