function esperarPor(tempo = 1000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo);
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(1), 2000)
    })
}

async function retornarValorRapido() {
    return 1;
}

async function executar() {
    const v = await retornarValorRapido();

    await esperarPor();
    console.log(`Async/Await ${v}...`);

    await esperarPor();
    console.log(`Async/Await ${v + 1}...`);

    await esperarPor();
    console.log(`Async/Await ${v + 2}...`);

    return v + 100;
}

async function executarDeVerdade() {
    const valor = await executar();
    console.log(valor);
}

executarDeVerdade();