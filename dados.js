// string
let container_verde = "Texto";
console.log("container_verde: " + typeof(container_verde));

// Inteiro 
let container_azul = 10;
console.log("container_azul: " + typeof(container_azul));

let container_escuro = -10;
console.log("container_escuro: " + typeof(container_escuro));

// Float
let container_branco = 1.25;
console.log("container_branco: " + typeof(container_branco));

// Boolean
let container_amarelo = true;  // 1 ou verdadeiro
console.log("container_amarelo: " + typeof(container_amarelo));

let container_rosa = false; // 0 ou falso
console.log("container_rosa: " + typeof(container_rosa));

// Array
let navio = [];         // [] array vazio

navio[0] = container_verde;
navio.push(container_azul);
navio.push(container_escuro);
navio.push(container_branco);
navio.push(container_amarelo);
navio.push(container_rosa);

console.log("Navio: " + typeof(navio));

// Objeto
let carro = {};  //Represeta um objeto
carro = {
    cor: "preto",
    marca: "ford",
    modelo: "fox",
    ano: "2009"
};    
console.log("carro: " + typeof(carro));

navio.push(carro);

// Null
container_escuro = null;
console.log("container_escuro: " + typeof(container_escuro));

// Undefined
let  container_pink;
console.log("container_pink: " + typeof(container_pink));

//navio.push(container_pink);

// Array
console.log("navio: " + navio);
console.log("Carro: ");
console.log(navio[6]);

let focus = navio.pop();

console.log("navio: " + navio);
console.log("Focus: ");
console.log(focus);

// Object
console.log("Focus Ano: ");
console.log(focus.ano);

focus.placa = 'xxx-xxxx';   // Criaçao de uma propiedade que não existia

console.log("Focus Ano: ");
console.log(focus);