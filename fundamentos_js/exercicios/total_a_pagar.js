//      PRODUTO                     CÓDIGO
let cachorroQuente = 3.00,//---------100
    hamburguer = 4.00,//-------------200
    cheeseBurguer = 5.50,//----------300
    bauru = 7.50,//------------------400
    refrigerante = 3.50,//-----------500
    suco = 2.80//--------------------600


function totalAPagar(codigo, quantidade) {
    total = 0;

    switch (codigo) {
        case 100: total = quantidade * cachorroQuente
            break
        case 200: total = quantidade * hamburguer
            break
        case 300: total = quantidade * cheeseBurguer
            break
        case 400: total = quantidade * bauru
            break
        case 500: total = quantidade * refrigerante
            break
        case 600: total = quantidade * suco
            break
        default: total = 'Produto inesistente!'
    }

    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

}

console.log(totalAPagar(600, 3))