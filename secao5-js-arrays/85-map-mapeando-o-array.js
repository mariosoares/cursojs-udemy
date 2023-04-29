// .map((elem, ind, obj) => {return ...}), também não altera o array original
// o map transforma os valores dos elementos. Sempre volta a mesma quantidade de valores, mas todos alterados
// similar a filter, diferencia o retorno, com filter podemos ter um array menor no retorno

// Ex: retornar o dobro dos valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const callBack = function(elem, ind, obj){ return elem * 2}; // com função anônima
const callBack = (elem, ind, obj) => {return elem * 2};
const duplicaNumeros = numeros.map(callBack);
console.log(duplicaNumeros);





// const dobro = numeros.map(valor => valor * 2)
// console.log(dobro)