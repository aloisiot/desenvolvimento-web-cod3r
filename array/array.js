console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Ana', 'Bia', 'Carlos');
console.log(aprovados);
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Davi';
aprovados.push('Lucas');
console.log(aprovados.length);

aprovados[8] = 'Beatriz';
console.log(aprovados.length);
console.log(aprovados[6] === undefined);
console.log(aprovados);

aprovados.sort(); // Reorganiza o array alfabéticamente.
console.log(aprovados);

delete aprovados[2];
console.log(aprovados[2]);

reprovados = ['João', 'Maria', 'Vivi', 'Patricia']
reprovados.splice(1, 2, 'Novo elemento 1', 'Novo elemento 2' );
console.log(reprovados);