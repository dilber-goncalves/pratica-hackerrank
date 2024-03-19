//codigo para passar um carrossel de 7 imagens
//input >>><> (passadas de fotos)
//a saida informara qual numero da imagem que esta sendo exibida (entre 0 e 6)

const sequencia = ['>', '>', '>', '<', '>']; 
let indice = 0;
for (item of sequencia) {
    if(item === '>') {
        indice++;
    }else{
        indice--;
    }
    //caso não esteja entre 0 e 6
    if(indice < 0) {
        indice = 6;
    }else if(indice > 6) {
        indice = 0;
    }
    console.log(indice);
}