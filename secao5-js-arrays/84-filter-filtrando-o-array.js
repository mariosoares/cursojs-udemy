// filter -> filtrar, map -> modificar, reduce -> reduzir em um único valor
// .filter((valor, indice, vetor) => function)
// a function só precisa retornar true ou false. Se true, o termo estará no novo array
// o filter não altera os elementos, mesmo que a function retorne alguma alteração, pois só verifica se é true ou false
// Retorna um array com a mesma quantidade de elementos ou menos


// Ex: retornar números maiores que 10 num novo array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// com for
const maiorQue10 = [];
for (let value of numeros){
    if (value > 10){
        maiorQue10.push(value);
    } 
} 
console.log(maiorQue10); console.log();

// método .filter() recebe uma função de callback

//function callBackFilter(valor, indice, array)
function callBackFilter(elem, id, obj){
    return elem > 10; // retorna true ou false
}
const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados); console.log();

//função anônima como callback de filter
const callBackFilter1 = function (elem, ind, obj) { return elem > 10};
const filtrados1 = numeros.filter(callBackFilter1);
console.log(filtrados1, '<-- filtrados1'); console.log();
//const filtrados1 = numeros.filter(function (valor) { return valor > 10;})
//console.log(filtrados1); console.log();

// com arrow function -> possui return implícito e não precisa usar () se for 1 parâmetro somente
//const filtrados2 = numeros.filter(valor => valor > 10)
const callBackFilter2 = (elem, ind, obj) => {return elem > 10};
const filtrados2 = numeros.filter(callBackFilter2);
//const filtrados2 = numeros.filter((valor) => {return valor > 10});
// const numerosFiltrados2 = numeros.filter( (valor, indice, array) => {
//     //console.log(valor, indice, array); 
//     return valor > 10});
// console.log(numerosFiltrados2); console.log();
console.log(filtrados2, '<-- filtrados2'); console.log();



// usando também índice e array (exibindo só no final da iteração)
const callBackFilter3 = (elem, ind, obj) => {
    console.log(`Índice ${ind}:`, `Valor ${elem}:`);
    if (ind === obj.length - 1) console.log(obj, '<-- resultado do if');
    return elem > 10
};
const filtrados3 = numeros.filter(callBackFilter3);
console.log(filtrados3, '<-- filtrados3');

// const filtrados3 = numeros.filter((elem, ind, obj) => {
//     console.log(`Índice ${ind}:`, `Valor ${elem}:`);
//     if (indice === array.length - 1) console.log(array);
//     return elem > 10
// });


// const filtrados3 = numeros.filter((valor, indice, array) => {
//     console.log(`Índice ${indice}:`, `Valor ${valor}:`)
//     if (indice == array.length - 1) console.log(array)
//     return valor > 10
// })
// console.log(filtrados3);