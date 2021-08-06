function bissesto(ano) {
    if (isNaN(ano)) {
        return 'Insira um dado válido!'
    } else {
        teste = ano % 4 == 0 ?
            (ano % 100 == 0 ?
                (ano % 400 == 0 ? true : false) : true) : false

        if (teste) {
            return `O ano de ${ano} é bissesto!`
        } else {
            return `O ano de ${ano} não é bissesto!`
        }
    }
}

console.log(bissesto(2000));