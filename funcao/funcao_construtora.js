function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0;

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferarri = new Carro(350, 20);
ferarri.acelerar();
ferarri.acelerar();
ferarri.acelerar();
console.log(ferarri.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferarri);