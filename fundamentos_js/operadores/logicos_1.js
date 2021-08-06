let temDinheiro = true;
let estaEnsolarado = false;
let carroEstaNaGaragem = true;

//  Operador AND (&&)
let resultadoE = '#1 (AND) - Vai ao shopping? ';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

//  Operador OR (||)
let resultadoOU = '#2 (OR) - Vai ao shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

//  Operador OU EXCLUSIVO (^)
console.log(true ^ true);
console.log(true ^ false);
console.log(false ^ true);
console.log(false ^ false);

//  OU EXCLUSIVO forma alternativa (!== 'estritamente diferente')
console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

// Operador unario NOT (!)
console.log('Não verdadeiro: ' + !true);
console.log('Não falso: ' + !false);