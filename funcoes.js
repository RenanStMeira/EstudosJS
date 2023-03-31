// Calculo dos ingredientes
function calculaIngredientes() {
    let ing1 = 1.00
    let ing2 = 2.00
    let ing3 = 3.00

    let preco_ing = ing1 + ing2 + ing3;
    console.log('Valor Ingredientes: ',  preco_ing);

    return preco_ing;
}

    let preco_final = calculaIngredientes();

// Calculo da porcentagem confeiteira
function calculaConfeiteira(preco_conf) {
    let porc_conf = 30;
    preco_conf += preco_conf * porc_conf / 100;
    console.log('valor confeiteira: ',  preco_conf);

    return preco_conf;
}

preco_final = calculaConfeiteira(preco_final);


// Calculo das despesas da produção 
function calculaDespesas(preco_desp) {
    preco_desp += 5;
    console.log('Valor das dispesas: ',  preco_desp);

    return preco_desp;
}

preco_final = calculaDespesas(preco_final);

// Calculo dos custos fixos
function calculaCustos(preco_cust){
    preco_cust += 10;
    console.log('custos: ',  preco_cust);

    return preco_cust;
}

preco_final = calculaCustos(preco_final);

// Calculo do meu lucro
function calculaLucro(preco_luc){
    let lucro = 0.25;
    preco_luc += preco_luc * lucro;
    console.log('Valor Lucro: ',  preco_luc);

    return preco_luc;
}

preco_final = calculaLucro(preco_final);


// Retornar o preço final
console.log('Preço Final para vendas: ',  preco_final);



//-------Function Arrow-------

//calculaCustos = (preco_cust) => preco_cust += 10;
/*

calculaLucro = (preco_luc) => {
    let lucro = 0.25;
    preco_luc += preco_luc * lucro;
    console.log('Valor Lucro: ',  preco_luc);

    return preco_luc;
}


-----------Usar chamada em um bloco separado ou em outro arquivo js-------


let preco_final = calculaIngredientes();
preco_final = calculaConfeiteira(preco_final);
preco_final = calculaDespesas(preco_final);
preco_final = calculaCustos(preco_final);
preco_final = calculaLucro(preco_final);
*/