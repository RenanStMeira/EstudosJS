// Document object model

// selecionar pelo ID
//let btStart = document.getElementById('start');

// selecionar pela classe
//let dvContainer = document.getElementsByClassName('container');

// selecionar pela tag
//let buttons = document.getElementsByTagName('button');

// Selecionar por query  
// No query selector ele pega o primeiro elemento 
//let btReset = document.querySelector('#reset');

// Selecionar por query all pega todos 
//let AllButtons = document.querySelectorAll('button');



// PERCORRER ELEMENTOS:

// Selecionar elemento
let container = document.querySelector('.container');

// Pegar nodos filho
let containerChilds = container.childNodes;

// Pegar primeiro filho da lista
let firstNode = container.firstChild;

// Pegar o nome da nodo
let nodeName = container.nodeName;

// Pegar valor (texto)
let nodeValue = container.childNodes[3].firstChild.nodeValue;;

// Pegar o tipo elemento
let elemtype = container.nodeType;

// Pegar elemento pai
let parentElem = container.parentElement;

// Pegar primeiro elemento filho
let firstChildElem = container.firstElementChild;

// Pegar o ultimo elemento filho
let lastChildElem = container.lastElementChild;
console.log("lastChildElem: ", lastChildElem);