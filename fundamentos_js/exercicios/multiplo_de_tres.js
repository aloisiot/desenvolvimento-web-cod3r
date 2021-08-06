const multiploDeTres = (numb) => !isNaN(numb) ?
    (numb % 3 == 0 ? `${numb} é múltiplo de 3!` : `${numb} não é múltiplo de 3!`) :
    'Insira um valor numérico!'

console.log(multiploDeTres(81));