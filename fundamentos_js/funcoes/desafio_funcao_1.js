
const A = 100
const B = 11

function soma(parcela1, parcela2) {
    console.log(`Somando A e B: ${parcela1 + parcela2}`);
}

function subtacao(minuendo, subtraendo) {
    console.log(`Suntraindo B de A: ${minuendo - subtraendo}`);
}

function multiplicacao(multiplicando, multiplicador) {
    console.log(`Produto de A e B: ${multiplicando * multiplicador}`);
}

function divisao(dividendo, divisor) {
    console.log(`Divisão de A por B ${dividendo / divisor}`);
}

console.log(`A = ${A}, B = ${B}\n`)
soma(A, B);
subtacao(A, B);
multiplicacao(A, B);
divisao(A, B);