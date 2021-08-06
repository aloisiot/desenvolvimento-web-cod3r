function mediaEntreNotas() {
    let total = 0
    for (i in arguments) {
        total += arguments[i];
    }
    return total / arguments.length;
}

console.log(mediaEntreNotas(8.5, 10, 6.5,9,8));