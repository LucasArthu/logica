let peso = 120;
let listaQtdPecas = 9;
let nomePecas = "roda";

if(peso >=100) {
    console.log("peso da peça possui requisitos para cadastrar");   
} else {
    console.log("peso insuficiente - não pode cadastrar");
}

if(listaQtdPecas >= 10){
    console.log("não há capacidade na lista: caixa lotada!!!");
}else {
    console.log("há capacidade na lista")
}

if( nomePecas. length < 3 ) {
    console.log("Nome invalido para o cadastro da peça: precisa conter pelo menos 3 caracteres");
}else {
    console.log("Nome valido")
}
