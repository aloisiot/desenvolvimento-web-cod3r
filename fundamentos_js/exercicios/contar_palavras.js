function contarPalavras(frase) {
    const palavras = frase.split(" ")
    return palavras.length
}

const frase = 'Quantas palavras há nesta frase?'
console.log(frase, contarPalavras(frase))