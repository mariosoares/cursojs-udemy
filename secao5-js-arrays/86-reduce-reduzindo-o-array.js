// utilizada geralmente para reduzir o array a um único elemento
// reduce.((acumulador, valor, indce, array) => {function}, valorInicialAcumulador)

// somar todos números (reduce)
// retornar um array com os pares (filter)
// retornar um array com os valores dobrados (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// 1
// funcao (v1 -> valor anterior, v2 -> valor corrente, ind -> indice de cada elemento e o obj -> array)
const funcao = (v1, v2, ind, obj) => { return v1 + v2};
const somaNumeros = numeros.reduce(funcao);
const somaNumeros1 = numeros.reduce(funcao, 100);
console.log('A soma é:',somaNumeros); 
console.log('A soma iniciando com 100:',somaNumeros1);  console.log();


// const soma = numeros.reduce((acumulador, valor) => acumulador += valor, 0)
// console.log('A soma é:', soma);

// 2
const callBack = (elem, ind, obj) => {return elem % 2 === 0};
const numerosPares = numeros.filter(callBack);
console.log(numerosPares); console.log();

// const pares = numeros.filter(valor => valor % 2 === 0);
// console.log(pares);
// console.log(numeros);

// 3
const callBack1 = (elem, ind, obj) => {return elem * 2};
const duplicaNumeros = numeros.map(callBack1);
console.log('original:', numeros)
console.log('dobro:', duplicaNumeros);

// const dobro = numeros.map(valor => valor * 2)
// console.log('dobro: ', dobro)
// console.log('original: ', numeros)