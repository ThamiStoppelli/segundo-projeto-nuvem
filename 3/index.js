const express = require('express');
const app = express();

app.listen(5000,function(erro){
    if(erro){
        console.log('Erro ao Iniciar');
    }else{
        console.log('Servidor Iniciado, porta 5000');
    }
})

app.get('/', function (req, res) {
    res.send("<h1>Bem vindo ao nosso site!</h1><h2>Você pode acessar as rotas: <br> /consulta <br> /consulta?cpf=parametro ")
})

app.get('/consulta/', function (req, res) {
    let cpf = req.query['cpf'];
    if(cpf){
        res.send(`<h2>CPF pesquisado: ${cpf} </h2>`);
    }else {
        res.send(`<h2>CPF não foi informado </h2>`);
    }
    
})