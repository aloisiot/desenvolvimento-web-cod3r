const numeros = [1, 2, 3, 4, 5, 6];

for (i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i]);
}

console.log('\n')

for (i = 1; i < numeros.length; i+= 2) {
    console.log(i, numeros[i]);
}