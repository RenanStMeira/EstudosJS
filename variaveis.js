// recber os ingredientes
let vasilha_1 = "chocolate";     // atribuição de valores
let vasilha_2 = "500ml de leite";  
let vasilha_3 = "3 ovos"; 
let vasilha_4 = "5 colheres de farinha";

console.log('----variaveis-----')
console.log(vasilha_1);
console.log(vasilha_2);
console.log(vasilha_3);
console.log(vasilha_4);

// Misturar a massa
//concatenaçao de variaveis
let vasilha_mistura = vasilha_1 + vasilha_2 + vasilha_3 + vasilha_4;

console.log("----vasilha mistura-----")
console.log(vasilha_mistura);

let tabuleiro;
tabuleiro = "manteiga";
//Atribuiçao concatenando +=
tabuleiro += vasilha_mistura;

console.log("----tabuleiro-----")
console.log(tabuleiro);

// Colocar no forno
tabuleiro = "bolo de " + tabuleiro;
console.log("----forno-----")
console.log(tabuleiro);

