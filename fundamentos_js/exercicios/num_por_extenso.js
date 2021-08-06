function porExtenso(num) {
    let extenso = '';
    switch (num) {
        case 0: extenso = 'zero'
            break
        case 1: extenso = 'um'
            break
        case 2: extenso = 'dois'
            break
        case 3: extenso = 'três'
            break
        case 4: extenso = 'quatro'
            break
        case 5: extenso = 'cinco'
            break
        case 6: extenso = 'seis'
            break
        case 7: extenso = 'sete'
            break
        case 8: extenso = 'oito'
            break
        case 9: extenso = 'nove'
            break
        case 10: extenso = 'dez'
            break
        default: extenso = 'Número fora do intervalo!'
    }
    return console.log(extenso);
}

porExtenso(6);