function compras(trab1, trab2) {
    const sorvete = trab1 || trab2;
    const tv50 = trab1 && trab2;
    const tv32 = trab1 || trab2;
    saldavel = !sorvete;
    return { sorvete, tv50, tv32, saldavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));