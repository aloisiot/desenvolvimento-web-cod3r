// Uma factory retorna uma nova instância, ou seja, um novo objeto.
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}