function converterBase(numero) {
    num = numero.toString()
    n = num.length -1
    resultado = 0

    for(let i = 0; i < num.length; i++) {
        if(num[i] != 0) {
            resultado += 2 ** n
        }
        n--
    }
    console.log(resultado)
}

converterBase(101110)