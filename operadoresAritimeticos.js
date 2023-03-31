// x = (a + b - c) / d * e
// se x for par soma 1, senão subtrai 1

// Definindo variaveis
let a = 2;
let b = 3;
let c = 4;
let d = 5;
let e = 6;


// Soma    (a + b)
let x = a + b;
console.log('Soma ' + '(' +  a  + ' + ' +  b  + '):', x)

// Subtração    (a + b - c)
let old_x = x;
x -= c;  // x = x - c;
console.log('Subtração ' + '(' +  old_x  + ' - ' +  c  + '):', x)

// Divisao 
old_x = x;
x = x / d;
console.log('Divisão ' + '(' +  old_x  + ' / ' +  d  + '):', x)

// Multiplicar
old_x = x;
x *= e;
console.log('Multiplicar ' + '(' +  old_x  + ' * ' +  e  + '):', x)

x = parseInt(x);      //parseInt: retira o numero decimal > Ex apenas para garantir que x vai ser inteiro

// Módulo ou o resto
let mod = x % 2;

console.log('Modulo(resto) ' + '(' + x + ' % 2):', mod);

old_x = x;

if(mod === 0) {   // se for 0 X é par                      // === se é do mesmo tipo e tem o mesmo valor
    //incremento
    x++;  // x = x + 1  // x += 1
    console.log('Incremento ' + '(' + old_x + ' ++):', x);

} else { 
    //Decremento
    x--;
    console.log('Decremento ' + '(' + old_x + ' --):', x);
}              

console.log('Resultad Final ' , x);