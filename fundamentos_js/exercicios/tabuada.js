for (let multiplicando = 1; multiplicando <= 10; ++multiplicando) {
    console.log(`Tabuada do ${multiplicando}`);
    for (let multiplicador = 1; multiplicador <= 10; ++multiplicador) {
        console.log(`${multiplicando} x ${multiplicador} = ${multiplicando * multiplicador}`);
    }
    console.log('\n');
}