const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar1 = pessoa.falar;
falar1(); // Conflito entre paradigmas Funcional e OO.

const falar2 = pessoa.falar.bind(pessoa);
falar2();