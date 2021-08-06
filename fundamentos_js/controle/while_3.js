const futuro = Date.now() + 1000;
quantidade = 0;

while (Date.now() < futuro) {
    quantidade++;
}

console.log('Qtde; ' + quantidade);