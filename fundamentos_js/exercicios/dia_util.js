function diaUtil(dia) {
    switch (dia) {
        case 'sábado': case 'domingo':
            console.log('Fim de semana!');
            break;
        case 'segunda': case 'terça': case 'quarta': case 'quinta': case 'sexta':
            console.log('Dia útil!');
            break;
        default:
            console.log('Valor inesperado!')
    }
}

diaUtil('segunda');