//  Ambas as estruturas geram a mesma saida, 
//  mas o metodo DO WHILE testa a condição apos o bloco ser executado, 
//  garantindo que o mesmo seja executado pelo menos uma vez.
let x = 0;
let y = 0;

while (x < 10) {
    console.log(x);
    x++;
}

do {
    console.log(y);
    y++;
} while (y <10);