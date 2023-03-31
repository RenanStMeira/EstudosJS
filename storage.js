// Selecionar os elementos
let startButton = document.getElementById('start')
let stopButton = document.getElementById('stop')
let resettButton = document.getElementById('reset')
let time = document.getElementsByName('time')[0]
let body = document.getElementsByName('body')[0]

// Escrever no localStorage
startButton.onclick = function() {
    let d = new Date();     //d para criar data
    localStorage.setItem('time', d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds);  // metodo para escrever setItem
    localStorage.setItem('time_start', d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds);  
}


// Buscar dados no localStorage
body.onload = function(){
    time.textContent = localStorage.getItem('time')
}


// remover dados no localStorage quando clicar em stop
stopButton.onclick = function() {
    localStorage.removeItem('time');
}

// Limpar clicando no reset
resettButton.onclick = function(){
    localStorage.clear();
}

