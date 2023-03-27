/**
 *Aritméticos: + (Adição/Concatenação) - / *  
 **  Potenciação
 * % Resto da divisão
 *
 * Precedência: (), **, * / %, + -
*/

/*const num1 = 2;
const num2 = 10;
const num3 = '2';
console.log(num1 + num2); console.log(num3 + num2); console.log(num1 - num2);
console.log(num1 * num2); console.log(num1 / num2); console.log(num1 ** num2); 
console.log(10 % 3); console.log(5 + 2 * 10); console.log((5 + 2) * 10);*/
 console.log(2 ** 2 * 10);

// NaN - Not a number parseInt (inteiro), parseFloat(decimais)
const num10 = 10;
const num20 = Number('Luiz');
console.log(num10 + num20);
console.log(typeof num20);

let contador = 1;
console.log(contador++);
console.log(contador);

console.log();

contador = 1;
console.log(++contador);
console.log(contador);

const passo = 50;
contador = 0;
contador += passo; // contadoor = contador + passo
console.log(contador);