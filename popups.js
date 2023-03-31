// Metodos
// Alert, prompt, confirm, MODAL

// Alert
let startButton = document.getElementById('start');
startButton.onclick = () => {
   alert('Clicou em começar');
};


// Prompt
let stopButton = document.getElementById('stop');
stopButton.onclick = () => {
   let nameUser = prompt('Digite seu nome');
   console.log(nameUser)
};

// Confirm
let resetButton = document.getElementById('reset');
resetButton.onclick = () => {
    let confirmation = confirm('Você tem certeza');
    console.log(confirmation)
}