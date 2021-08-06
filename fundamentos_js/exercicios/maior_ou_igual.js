function maiorOuIgual1(n1, n2) {
    return typeof n1 == 'number' && typeof n2 == 'number' ? n1 >= n2: false;
}

console.log(maiorOuIgual1(2, 8));

function maiorOuIgual2(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
    }

console.log(maiorOuIgual2(2, 0));