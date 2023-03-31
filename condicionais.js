// Definir variaveis
let jarra = 100;
let cafeteira = {
    po: true,
    agua: true,
    ligada: true,
    cafe_pronto: true
}
let xicara = 100;

// Fazer cafe
if(jarra < 100){
    console.log("Fazendo um noo café")
    if(cafeteira.po == false) {
        cafeteira.po = true;
    }
    if(cafeteira.agua == false){
        cafeteira.agua = true;
    }
    if(cafeteira.ligada == false){
        cafeteira.ligada = true;
    }

    cafeteira.cafe_pronto = true;
    jarra = 100;
} else if(xicara == 0){ // Tomar café
    if(cafeteira.cafe_pronto){
    xicara = 100;
    jarra -= 100;
    }
    console.log('café quentinho')    
} else if(jarra > 100 ) {// Manitorar a jarra
    cafeteira.ligada = false;
    console.log('jarra esta cheia..')
} else { // manter quente
    cafeteira.ligada = true;
    console.log('estamos mantendo o café quente')
}




