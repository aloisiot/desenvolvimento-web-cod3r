function calculaJurosCompostos(totalEmprestimo, taixa, numParcelas,) {
    taixa /= 100;

    let prestacao = (totalEmprestimo * taixa) / (1 - (1 / (1 + taixa) ** numParcelas)),
        saldoDevedor = totalEmprestimo,
        juro = 0,
        amortizacao = 0,
        totalAmortizacao = 0,
        totalJuros = 0,
        totalPrestacoes = 0;

    for (mes = 1; mes <= numParcelas; mes++) {
        // Mensais
        juro = saldoDevedor * taixa;
        amortizacao = prestacao - juro;
        saldoDevedor -= amortizacao;

        // Totais
        totalPrestacoes += prestacao;
        totalJuros += juro;
        totalAmortizacao += amortizacao;
    }
    console.log(`Total a pagar: ${totalPrestacoes.toFixed(2)}`, `\nTotal juros: ${totalJuros.toFixed(2)}`)
}

calculaJurosCompostos(24000, 2, 24)