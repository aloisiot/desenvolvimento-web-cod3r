const t1 = false;
const t2 = true;

let comprarTV50 = t1 && t2;     //  AND
console.log('Vamos comprar a TV50"? ', comprarTV50);

let comprarTV32 = t1 !== t2;    // XOR
console.log('Vamos comprar a TV32"? ', comprarTV32);

let tomarSorvete = t1 || t2;    //  OR
console.log('Vamos tomar sorvete? ', tomarSorvete);

let ficarEmCasa = !tomarSorvete;    //  NOT
console.log('Vamos ficar em casa? ', ficarEmCasa);