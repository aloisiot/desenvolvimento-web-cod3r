// let e const.
{
    var a = 2;

    let b = 3;

    console.log(b);
}

console.log(a);

// Template String.
const produto = 'Smartphone';
console.log(`${produto} é caro!`);

// Destructuring.
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y)

const { nome: i, idade } = { nome: 'Ana', idade: 19 };
console.log(i, idade);