// Notação literal.
const obj1 = {};
console.log(obj1);

// Objecct em js.
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Funções construtoras.
function Produto(nome, preco, desconto) {
    this.nome = nome,
        this.getPrecoComDesconto = () => preco * (1 - desconto);
}

const p1 = new Produto('caneca', 19, 0.15);
const p2 = new Produto('SmartPhone', 1998.99, 0.20);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory.
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioDoMes: () => (salarioBase / 30) * (30 - faltas)
    }
}

const f1 = criarFuncionario('Adão', 2998, 2);
console.log(f1.salarioDoMes());

// Object.create
const filha = Object.create(null);
filha.nome = 'Mary';
console.log(filha);

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info)