const passo1 = (ctxt, next) => {
    ctxt.valor1 = 'valor1'
        next()
}

const passo2 = (ctxt, next) => {
    ctxt.valor2 = 'valor2'
        next()
}

const passo3 = ctxt => ctxt.valor3 = 'valor3'

const exec = (ctxt, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctxt, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctxt = {}
exec(ctxt, passo1, passo2, passo3)
console.log(ctxt)