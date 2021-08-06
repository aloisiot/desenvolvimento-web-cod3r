const saudacao = require('./passando_parametros')('Alan', 'David', 'Marcia')
console.log(saudacao)

const saudacao2 = require('./passando_parametros')(['Alan', 'David', 'Marcia'])
console.log(saudacao2)