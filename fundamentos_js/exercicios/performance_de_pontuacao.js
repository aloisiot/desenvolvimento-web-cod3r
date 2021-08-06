// DEU RUIM!!!
const todosOsResultados = [];
let recordes = 0;
let menorResultado;

function novoResultado(novo){
    todosOsResultados.push(novo);
    
    for(i = 0; i < todosOsResultados.length; i++){
        if(novo > todosOsResultados[i]){
            recordes++;
        } 
    }

    for(i = 0; i < todosOsResultados.length; i++){
        if(novo < todosOsResultados[i]){
            menorResultado = novo;
        }
    }

}

novoResultado(11)
novoResultado(23)
novoResultado(5)
novoResultado(12)
novoResultado(21)
console.log(recordes, menorResultado)
console.log(todosOsResultados);
