function testeTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a == b && a == c) { return 'Equilátero' }
        else if ((a == b && a !== c) || (b == c && b !== a) || (c == a && c != b)) { return 'Isósceles' }
        else if (a !== b && a !== c && b !== c) { return 'Escaleno' }
        else { return 'Erro inesperado!!' }
    } else {
        return 'Os valores atribuidos não correspondem a um triangulo.'
    }
}

console.log(testeTriangulo(9, 9, 9));