const express = require("express");
const app = express();

app.listen(5555,function(erro){
    if(erro){
        console.log('erro ao iniciar o servidor');
    }else{
        console.log('servidor iniciado, porta 5555');
    }
})

app.get('/', function (req, res) {
    res.send("<h1>Bem vindo ao nosso site!</h1><br><h2>Você pode acessar essas rotas:<br> /primo/parametro <br> /numero/parametro <br> /celcius/parametro</h2>");
})

app.get("/primo/:numPrimo?",function(req,res){
    var n = req.params.numPrimo;
    if (n){
        var cont = 0;
        for(var i = 1;i<=n;i++){
            if(n%i==0){
                cont++;
            }
        }
        if(cont==2){
            res.send("<h2>o número "+n+" é primo</h2>");
        }else{
            res.send("<h2>o número "+ n+ ' não é primo </h2>');
        }
    } else {
        res.send("<h3>nenhum número foi informado </h3>");
    }
})


app.get("/numero/:num?",function(req,res){
    var n = req.params.num;
    if(n){
        if(n%2==0){
            res.send(" <h2>o número é par</h2> ");
        }else{
            res.send(" <h2>o número é impar</h2> ");
        }
    }else{
        res.send('<h3> numero recebido</h3>');
    }
})


app.get("/celcius/:temp?",function(req,res){
    var t = req.params.temp;
    if(t){
        var c = ((t*1.8)+32).toFixed(2);
        res.send("<h2>"+t+" Celsius em Fahrenheit é "+c+"</h2>");
    } else {
        res.send("<h3>nenhum valor informado</h3>");
    }
})