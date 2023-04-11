// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// new Date();
// new Date(valor);
// new Date(dataString);
// new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

// funções construtoras sempre começam com a primeira letra maiúscula, e usam o new no começo
//                h   min  seg  miliseg
const tresHoras = 3 * 60 * 60 * 1000 // três horas em milésimos de segundos
const umDia = 24 * 60 * 60 *1000 // um dia em milésimos de segundo

let data = new Date(0); // 01/01/1970 Timestamp unix ou época unix
console.log(`${data.toString()} --> GMT-3`); // toString mostra por extenso a data
data = new Date(0 + tresHoras);
console.log(data.toString());
console.log(data);console.log();

data = new Date(0 + tresHoras + umDia); // data 0, o número representa milissegundos a partir da data zero: 1970-01-02T03:00:00.000Z
console.log(data); 
data = new Date(0 + tresHoras - umDia); 
console.log(data); console.log(); 

let data1 = new Date(2023, 1, 16, 23, 45, 50, 900); //a, m, d, h, min, seg, ms // mês 1 -> fevereiro
console.log(data1.toString());
data1 = new Date(2023, 1, 16, 23, 45, 50, 1000); // 1000 milisegundos -> 1 segundo
console.log(data1.toString());
let data2 = new Date('2023-02-16 23:45:50:900'); // // com strings pode ser digitado nesse formato
console.log(data2.toString());console.log();

// funções do new Date atual

let data3 = new Date(); // criando um objeto com data atual, neste exato momento
console.log(data3);
console.log(Date());
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth()); // mês começa do 0
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('Ms', data3.getMilliseconds());
console.log('Dia semana', data3.getDay()); // dia na semana, começando do 0 -> domingo, 6 -> sábado
console.log();

let dataAtualMilisegundos = Date.now(); // com o Date.now() se obtêm os milésimos de segundo desse momento do dia
console.log(`${dataAtualMilisegundos} milisegundos`);
let data4 = new Date(dataAtualMilisegundos);
console.log(data4);
console.log(data4.toString());