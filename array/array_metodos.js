const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

pilotos.pop(); // Remove o ultimo elemento do array.

pilotos.push('Verstappen'); // Add um elemento à última posição do array.

pilotos.shift(); // Remove o primeiro elemento.

pilotos.unshift(); // Add um novo elemento à primeira posição.

pilotos.splice(2, 0, 'Bottas', 'Massa'); // Remove e/ou add elementos.

const algunsPilotos1 = pilotos.slice(2); // Novo array. Elementos a partir do indice especificado.

const algunsPilotos2 = pilotos.slice(1, 4); // Novo array. Elementos entre os índices especificados.

console.log(pilotos, algunsPilotos1, algunsPilotos1);