const notas = [7.7, 5.2, 6.5, 8.9, 3.6, 7.1, 9.0];

// Sem usar CallBack.

let notasBaixas1 = [];

for (i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

// Ussasndo CallBack.

const notasBaixas2 = notas.filter((notas) => notas < 7);

console.log(notasBaixas2);

const notasBaixas3 = notas.filter(function(notas){
    return notas < 7;
})

console.log(notasBaixas3);