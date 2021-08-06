const nascimento = {
    dia: '15',
    mes: '06',
    ano: '2020',
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(nascimento.exibir());