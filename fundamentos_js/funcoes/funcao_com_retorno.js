
function sempreRetornaUm() {
    return 1;
    console.log('Codigo inatingivel!')
}

function textoOuNumero(retornaTexto) {
//    return retornaTexto ? 'Qualquer texto.' : 123;
//}
   if(retornaTexto) {
        return 'Qualquer texto.';
    }
        return 123;
}

let valor = sempreRetornaUm();
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));