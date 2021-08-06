const exponenciacao = {
    metodo1: function (base, expoente) {
        for (i = 0; i < expoente; i++) {
            return base * base;
        }
    },

    metodo2: (base, expoente) => base**expoente // O ES2015 troxe o operador de exponenciação (**).
}

console.log(exponenciacao.metodo2(3, 2));