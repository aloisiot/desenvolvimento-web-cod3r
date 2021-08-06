// Forma literal.
function fun1() { }

// Armazenando em constante ou variável.
const fun2 = function () { }

// Armazenando em array.
const array = [function (a, b) { return a + b; }, fun1, fun2];

console.log(array[0](2, 3));

// Armazenando emum tributo de objeto.
const obj = {}
obj.cumprimentar = function() { return 'Opa!'}
console.log(obj.cumprimentar());

// Função como parâmetro.
function run(fun) {
    fun();
}

// Uma função pode retornar/conter outra função.
function somar(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

somar(2, 3)(4);
const cincoMais = somar(2, 3);
cincoMais(4);