console.log(100 / 0); //em outras linguagens isso geraria um erro
console.log(!!(100 / 0)); // é avaliado como true
console.log();

let num1 = 9.54578;
let num2 = Math.floor(num1);
console.log(num2);
num2 = Math.ceil(num1);
console.log(num2);
num2 = Math.round(num1);
console.log(num2);
console.log();

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log();

console.log(Math.random()); //gera números aleatórios entre 0 e 1, o 1 não é incluído
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //número aleatório entre 10 e 5
console.log(aleatorio);
console.log();

console.log(Math.PI);
console.log(Math.pow(2,3));
console.log(9 ** (1/2));
console.log(Math.sqrt(9));
