// IEEE 754-2008 padrão que o javascript segue para casas decimais
let n1 = 0.7;
let n2 = 0.1;
console.log(n1 + n2);
n1 += n2; //esperado 0.8
n1 += n2; //esperado 0.9
n1 += n2; //esperado 1.0
console.log(n1);
console.log(Number.isInteger(1.00)); //true
console.log(n1.toFixed(2));
console.log(Number.isInteger(n1.toFixed(2))); //false
console.log(Number(n1));
n1 = Number(n1.toFixed(2)); //ou parsetoFloat(n1.toFixed(2));
console.log(Number(n1));
console.log(Number.isInteger(n1));
//resolvendo sem função:
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0
console.log();


let num1 = 10; // number
let num2 = 2.5; // number
let num3 = 10.578955125547

//num1 = Number(num1.toFixed(2));
console.log(num1.toString() + num2);
console.log(typeof(num1.toString() + num2));
console.log(num1.toString(2)); //representação binária do número
console.log(num3.toFixed(3)); //fixa(arredonda) o número de casas decimais
//console.log();
let temp = num1 + '5';
let temp1 = num1 * 'olá';
console.log();
console.log(temp);
console.log(temp1);
console.log();
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num3));
console.log();
console.log(Number.isNaN(temp));
console.log(Number.isNaN(temp1));