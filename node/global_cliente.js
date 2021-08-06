require('./global')

console.log(minhaAPP.saldacao())

// Cuidado ao alterar o bgj global. 
global.nome = 'Teste' // O método freeze é uma alternativa para deixar a implementação imutavel
console.log(global.nome)