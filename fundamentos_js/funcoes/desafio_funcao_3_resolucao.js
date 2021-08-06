
const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3) {
    const menorNota = (minimo(n1, minimo(n2, n3)));

    if (n1 === menorNota) {
        return (n2 + n3) / 2;
    } else if (n2 === menorNota) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

function notaParaConceito(media) {
    if (media >= 7) {
        return 'Aprovado!'
    } else if (media >= 4) {
        return 'Recuperação!'
    } else if (media >= 0) {
        return 'Reprovado!'
    }
}

const mediaFinal = (media(nota1, nota2, nota3));
const statusFinal = (notaParaConceito(mediaFinal));

console.log(mediaFinal);
console.log(`O resultado final do aluno é: ${statusFinal}`);