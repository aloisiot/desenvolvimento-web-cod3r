// O Node faz cach... mantem os arquivos como uma Única instância.
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}