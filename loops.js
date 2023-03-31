// Lista de produtos
let produtos = [
    {
        codigo: 1,
        validade: new Date('2050-07-07')  //criando uma data em JS 07/07/2050
    },
    {
        codigo: 2,
        validade: new Date('2050-08-08')  //criando uma data em JS 07/07/2050
    },
    {
        codigo: 3,
        validade: new Date('2050-08-08')  //criando uma data em JS 07/07/2050
    },
    {
        codigo: 4,
        validade: new Date('2050-08-08')  //criando uma data em JS 07/07/2050
    },
    {
        codigo: 5,
        validade: new Date('2050-06-08')  //criando uma data em JS 07/07/2050
    },
];

// Verificar validade de cada produto da lista

for(let i = 0; i < produtos.length; i++) {
    if(produtos[i].validade < new Date('2050-08-01')) {
        console.log('Codigo ' + produtos[i].codigo + ':Produto Vencido');
        //break; //Parar imediato
    } else {
        console.log('Produto no prazo de validade');
    }
}

//Metodo para repetição de codigo

//if(produtos[1].validade < new Date('2050-08-01')) {
//    console.log('Produto vencido');
//} else {
//    console.log('Produto no prazo de validade');
//}


