// Evento de Click
let startButton = document.getElementById('start');

startButton.onclick = function() {
    console.log('clicou em start');
}

// Evento de tecla precionada (digitando)
let inputText = document.getElementById('input_text');

inputText.onkeydown = function(event) {
    console.log('Digitou: ', event.keyCode);
}

// evento de carregamento de elemento
let body = document.getElementsByTagName('body')[0];

body.onload = function(){
    console.log('Carregou o body')
}

// Evento de mouse sobre elemento
startButton.onmouseover = function(event) { 
    console.log("o mouse esta sobre ", event.target.innerText);
}

// Evento de tirar o mouse do elemento
startButton.onmouseout = function(event) {
    console.log('O mouse saiu de  ', event.target.innerText)
}