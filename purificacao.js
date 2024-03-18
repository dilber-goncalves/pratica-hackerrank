//*Canis %lupus )familiaris
//Felis silvestris *catus&
//$Ailuropoda@ melanoleuca!
//RETIRAR CARACTERES ESPECIAIS

let dadoPurificado = "";
const stringCorrompida = "*Canis %lupus )familiaris";

for (let caractere of stringCorrompida){
    if(caractere === "!" || caractere === "@" || caractere === "#" || caractere === "$" || caractere === "%" || caractere === "&" || caractere === "*" || caractere === "(" || caractere === ")"){
        //ignorar
    }else{
        dadoPurificado += caractere;
    }
}
console.log(dadoPurificado);

/*function processData(input){
    solucao(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input){
    input += input;
});

process.stdin.on("end", function(){
    processData(_input);
});*/