function teste1 (num) {
    if(num > 7)
        console.log(num);

    console.log('Fim')
}

teste1(6);
teste1(8);

function teste2(num) {
    if(num >7); {   // Cuidado com o ponto e ';' ...
        console.log(num)
    }
}

teste2(6);
teste2(8);