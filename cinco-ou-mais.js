//promoção 5 ou mais, o menor valor é grátis!

const precos = [100, 500, 100, 200, 50];
let qntProdutos = precos.length;
let soma = 0;
for (let preco of precos){
    soma += preco;
}
if(qntProdutos >= 5){
    //tem promo
    let menor = precos[0];
    for (let preco of precos){
        if(preco < menor) {
            menor = preco;
        }
    }
    console.log(soma - menor);
}else{
    //não tem promo 
    console.log(soma);
}