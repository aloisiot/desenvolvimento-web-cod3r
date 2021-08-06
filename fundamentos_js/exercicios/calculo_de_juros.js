const calcularJuros = {
    simples: function (invest, juros, tempo) {
        return (invest * (1 + (juros * tempo))).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
    },
    composto: function (invest, juros, tempo) {
        let investimento = invest;
        for (i = 0; i < tempo; i++) { investimento *= (1 + juros); }
        return investimento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}

console.log(calcularJuros.composto(5500, 0.02, 2));
console.log(calcularJuros.simples(5500, 0.02, 2));