const hora = 23;
const saldacao = hora <= 11 ? 'Bom dia!' : (hora <= 17 ? 'Bom tarde!' : 'Boa noite!');

console.log(saldacao);