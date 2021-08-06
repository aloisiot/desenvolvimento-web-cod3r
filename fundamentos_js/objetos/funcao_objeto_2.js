function criarData (dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        },
    };
}

const d1 = criarData(15,6,2020)
const d2 = criarData(10,10,2010)
const d3 = criarData(22,2,2000)

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

console.log(d1);
console.log(d2);
console.log(d3);