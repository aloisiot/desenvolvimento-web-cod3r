function contarCaracter1(caracter, string) {
    const soletrado = string.split("")
    let contador = 0
    
    for (let i = 0; i < soletrado.length; i++) {
        if (soletrado[i] == caracter) {
            contador++
        }
    }
    
    return contador
}

function contarCaracter2(caracter, string) {
    let contador = 0

    for (let i = 0; i < string.length; i++) {
        if(string.charAt(i) === caracter) {
            contador++
        }
    }
    return contador
}

console.log(contarCaracter1('C', 'Carlos e Ana são um lindo casal'))
console.log(contarCaracter2('c', 'Carlos e Ana são um lindo casal'))