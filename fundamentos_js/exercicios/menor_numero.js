function menorNumero(array) {
    let menorNum = array[0]
    for (i = 0; i < array.length; i++) {
        if (array[i] < menorNum) {
            menorNum = array[i];
        }
    }
    return menorNum;
}

const ar = [-10, 5, -2, -30];
console.log(menorNumero(ar));