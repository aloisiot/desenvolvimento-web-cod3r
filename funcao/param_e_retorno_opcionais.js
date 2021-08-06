function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

area(5, 5);
console.log(area(1, 12));
console.log(area(2));
console.log(area());
console.log(area(2, 4, 8, 48));
console.log(area(5, 5));