function fruta(frut) {
    switch (frut) {
        case 'maçã': console.log('Não vendemos essa fruta aqui!');
            break;
        case 'kiwi': console.log('Estamos com escassez de kiwi.');
            break;
        case 'melancia': console.log('Aqui está, são 3 reais.');
            break;
        default: console.log('Erro!!! Dado inválido.')
    }
}

fruta('melancia');