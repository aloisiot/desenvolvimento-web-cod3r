// Cadeia de protótipo (prototype chain).
Object.prototype.atbt0 = 'Z' // Não repita isso em casa.
const avo = { atbt1: 'A' }
const pai = { __proto__: avo, atbt2: 'B', atbt3: '3'}
const filho = { __proto__: pai, atbt3: 'C'}

console.log(filho.atbt0, filho.atbt1, filho.atbt2, filho.atbt3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

carro.acelerar(15);
console.log(carro.velAtual);

const ferrari = {
    modelo: 'F40',
    velMax: 320
}

const volvo = {
    modelo: 'V40',
    velMax: 200,
    status() {
        return `${this.modelo}: ${super.status()}Km/h`
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

ferrari.acelerar(100);
console.log(ferrari.status());

volvo.acelerar(80);
console.log(volvo.status());