// retornar o somatório do dobro de todos os números pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const callBackPares = (elem, ind, obj) => {return elem % 2 === 0};
const numerosPares = numeros.filter(callBackPares);
console.log(numerosPares);

const callBackDobro = (elem, ind, obj) => {return elem * 2};
const numerosParesDobro = numerosPares.map(callBackDobro);
console.log(numerosParesDobro);

const callBackDobroSoma = (v1, v2, ind, obj) => {return v1 + v2 };
const numerosParesDobroSoma = numerosParesDobro.reduce(callBackDobroSoma);
console.log(numerosParesDobroSoma); console.log();


// minha solução
const pares = valor => valor % 2 === 0
const dobro = valor => valor * 2
const somatorio = (acumulador, valor) => acumulador + valor
console.log(numeros.filter(pares).map(dobro).reduce(somatorio))