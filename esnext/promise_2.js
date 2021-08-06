// setTimeout(() => {
//     console.log('Executando callback...');
// 
//     setTimeout(() => {
//         console.log('Executando callback...');
// 
//         setTimeout(() => {
//             console.log('Executando callback...')
//         }, 2000)
//     }, 2000)
// }, 2000);


function esperarPor(tempo = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando Promise...');
            resolve();
        }, tempo);
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)