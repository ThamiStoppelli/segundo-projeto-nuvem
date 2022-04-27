const express = require('express');
const app = express();

let funcoes = require('./funcoes');

console.log(funcoes.soma(5, 10));
console.log(funcoes.primo(7));
console.log(funcoes.fibonacci(7));

app.get('/', function (req, res) {
    res.send("<h1>Bem vindo ao nosso site!</h1><h2>Você pode acessar as rotas: <br> /soma <br> /numeroprimo <br> /fibonacci <br> ")
})

app.get('/soma/', function (req, res) {
    res.send(`<h3> O resultado da soma entre 5 e 10 é: ${funcoes.soma(5, 10)}<h3>`);
})

app.get('/numeroprimo/', function (req, res) {
    res.send(`<h3> ${funcoes.primo(7)}<h3>`);
})

app.get('/fibonacci/', function (req, res) {
    res.send(`<h3> Os 7 primeiros elementos da sequência de Fibonacci são: ${funcoes.fibonacci(7)}<h3>`);
})

app.listen(3000,function(erro){
    if(erro){
        console.log('Erro ao Iniciar');
    }else{
        console.log('Servidor Iniciado na porta http://localhost:3000');
    }
})