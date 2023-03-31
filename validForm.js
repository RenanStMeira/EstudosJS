// Selecionar elementos
let form = document.getElementById('formulario');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let lsexo = document.getElementById('lsexo');

let fname_msg = document.getElementById('msg-vld-fname');
let lname_msg = document.getElementById('msg-vld-lname');
let lsexo_msg = document.getElementById('msg-vld-lsexo');

// Validar quando o usuario sai do campo
fname.onblur = function(event) {
    if(event.target.value.length < 3) {
        fname_msg.textContent = "O nome precisa ter 3 letras ou mais";
        fname_msg.style.display = 'block';
    } else {
        fname_msg.style.display = 'none';
    }
}


// Validar quando o usuario muda um campo
lsexo.onchange = function(event) {
    if(event.target.value == 'selecione'){
        lsexo_msg.textContent = 'Você precisa selecionar um sexo';
        lsexo_msg.style.display = 'block'; // apresentar um display com a informação acima 
    } else {
        fname_msg.style.display = 'none'; // display none nao apresenta mensagem 
    }
}


// Validar quando usuario entra em um campo
// erro some quando recomeça a digitar valor correto
fname.onfocus = function(){
    fname.msg.style.display = 'none';
}

// Validar quando usuario enviar formulario
form.onsubmit = function(event){
    if(fname.value.length <3 || lsexo.value == 'selecione') { // validader quantidade de letras e sexo se foi selecionado
        alert('Por favor preencha o formulario corretamente') // caso nao for exibir alert
        event.preventDefault();
    }
}