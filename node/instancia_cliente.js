const contadorA = require('./instancia_unica')
const contadorB = require('./instancia_unica')

const contadorC = require('./instancia_nova')()
const contadorD = require('./instancia_nova')()

// Tanto o contadorC como o contadorD apontam pro mesmo obj em cach.
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) 

// A função factory cria novas instâncias, portanto contadorC e contadorD apontam para objetos diferentes.
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) 