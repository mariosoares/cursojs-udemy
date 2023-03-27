/*
José Miranda tem 30 anos, pesa 84kg
tem 1.8m de altura e seu IMC é de 25.925925925925924
José Miranda nasceu em 1980
*/
const nome = 'José';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaMetro = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaMetro * alturaMetro);
anoNascimento = 1980;
console.log(nome, sobrenome, 'tem', idade, 'anos e pesa', peso, 'kg.');
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos e pesa ' + peso + ' kg.');
//template strings -> string que você pode colocar variáveis dentro dela:
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg.`);
console.log(`Tem ${alturaMetro} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`)
