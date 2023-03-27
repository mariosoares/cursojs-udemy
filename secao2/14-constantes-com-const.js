// Não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

//Não se pode declarar uma constante sem inicializá-la

const nome = 'João';
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero  * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(nome);
console.log(typeof (primeiroNumero));
console.log('5'+10); //concatena, não soma, o resultado é uma string
console.log(10 + '5');