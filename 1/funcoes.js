function soma (x, y) {
    return x+y;
}

function primo (x) {
    let numeroInformado = x;
    let aux = 0;
    let resposta = ''
  
    for (let i = 2; i < numeroInformado; i++) {
        if (numeroInformado%i == 0){
            resposta = numeroInformado + " não é um número primo, pois é dividido por " + i + ".";
            aux++;
            break;
        } 
    }
    if (aux == 0) {
        resposta = numeroInformado + " é um número primo.";
    }

    return resposta;
}

function fibonacci (x){
    let numeroInformado = x;
    let termo1 = 0;
    let termo2 = 1;
    let termo3;
  
    let resposta = "Fibonacci : " + termo1 + ", " + termo2;
  
    for (i = 3; i <= numeroInformado; i++){
        termo3 = termo1 + termo2;
        resposta += ", " + termo3;
        termo1 = termo2;
        termo2 = termo3;
    }
    return resposta;
}

module.exports = {
    soma, 
    primo,
    fibonacci
}
