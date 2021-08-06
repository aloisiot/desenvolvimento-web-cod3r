function inverso(parametro) {
    if (typeof parametro == 'number') {
        return - parametro;
    } else if (typeof parametro == 'boolean') {
        return !parametro;
    } else {
        return `Boleano ou número esperados, mas o parâmetro é do tipo ${typeof parametro}.`;
    }
}

const inv = inverso(8);

console.log(typeof inv);
console.log(inv);