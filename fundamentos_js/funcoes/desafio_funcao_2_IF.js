// Parâmetro (Nota) - Retorno (conceito)

function notaParaConceito(nota) {
    if (Math.ceil(nota) === 10) { return 'A +' };
    if (Math.ceil(nota) === 9) { return 'A' };
    if (Math.ceil(nota) === 8) { return 'B +' };
    if (Math.ceil(nota) === 7) { return 'B' };
    if (Math.ceil(nota) === 6) { return 'C +' };
    if (Math.ceil(nota) === 5) { return 'C' };
    if (Math.ceil(nota) === 4) { return 'D +' };
    if (Math.ceil(nota) === 3) { return 'D' };
    if (Math.ceil(nota) === 2) { return 'E +' };
    if (Math.ceil(nota) === 1) { return 'E' };
    if (Math.ceil(nota) === 0) { return 'F' };
    if (nota > 10 || nota < 0) { return null };
}

console.log(notaParaConceito(8.9));

console.log(`O conceito do Bruno é ${notaParaConceito(7.5)}`);
console.log(`O conceito da Alice é ${notaParaConceito(9.5)}`);