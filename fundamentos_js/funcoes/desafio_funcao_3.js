
const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 4.7;

function media(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
        return (n2 + n3) / 2;
    } else if (n2 <= n1 && n2 <= n3) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

function status(media) {
    if (media >= 7) {
        return 'Aprovado!';
    } else if (media >= 4) {
        return 'Recuperação!';
    } else if (media < 4) {
        return 'Reprovado!';
    }
}

const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = status(mediaFinal);

console.log(mediaFinal);
console.log(`A situação final do aluno é: ${statusFinal}`);
