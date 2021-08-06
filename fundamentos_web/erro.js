function tratarErroELancar(erro){
    throw new Error('Mensagem de erro...')
}

function imprimirNomeGritado() {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('Fim!')
    }
}

const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);