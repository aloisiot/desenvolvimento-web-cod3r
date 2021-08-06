function retornaUmaFuncao() {

    function bomDia() {
        return 'BomDia!';
    }

    return bomDia;
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());

const func = retornaUmaFuncao();
console.log(func());