let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// Criando uma variável se m let ou var.
abc = 3;
console.log(global.abc);

// module.exports = { c: 456, d: false, e: 'teste' };