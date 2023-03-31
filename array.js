let cores = ['grena', 'branco', 'verde'];
console.log(cores);

// Incluir e remover itens 
console.log("----Incluir e remover---");

cores.push('azul');
console.log(cores);
cores.pop();   // retirar a ultima posição
console.log(cores);

// Percorrer um array
console.log("----Percorrendo---");

cores.forEach((cor, index) => {
    console.log(cor, index);
});


// Tranformações em elementos
console.log("----Transformação---");

let cores_claras = cores.map((cor) => {
    return cor + ' claro';
});
console.log(cores_claras);


// Filtar elementos
console.log("----Filtrar---");

let cores_filtro = cores.filter(cor => cor.length== 5);
console.log(cores_filtro);


// Pequisar valores
console.log("----Pesquisar---");

let cor_pesquisa = cores.find(cor => cor == 'grena');
console.log(cor_pesquisa);


// Pesquisar index
console.log("----Pesquisar index---");

let cor_index = cores.findIndex(cor => cor.length == 5 );
console.log(cor_index);