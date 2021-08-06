const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./banco_de_dados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, resp, next) => {
    resp.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, resp, next) => {
    resp.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, resp, next) => {
    const produto = bancoDeDados.salvarPorduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto)  // Retorna JSON
})

app.put('/produtos/:id', (req, resp, next) => {
    const produto = bancoDeDados.salvarPorduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto)  // Retorna JSON
})

app.delete('/produtos/:id', (req, resp, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    resp.send(produto)  // Retorna JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})