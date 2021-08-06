const d1 = {
    dia: 15,
    mes: 06,
    ano: 2020,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d2 = {
    dia: 10,
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d3 = {
    dia: 22,
    mes: 02,
    ano: 2000,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());