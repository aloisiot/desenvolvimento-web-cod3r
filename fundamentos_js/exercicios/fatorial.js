function fatorial (x) {
    if (x >= 0) {
        let y = 1,
            z = 1;

            while ( z <= x) {
                y *= z;
                z++;
            }
        console.log(y)
    }
}

fatorial(6)