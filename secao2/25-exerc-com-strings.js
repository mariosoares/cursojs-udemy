//let algumaString = 'Um "texto"';
//let outraString = "Um \"texto\""; // escapando com "\" 
// length // as strings são indexadas a partir de 0
// Caractere de escape \
let umaString = 'Meu valor atrasado';

console.log(umaString[4]);
console.log(umaString[10]); // undefined para uma posição fora do range
console.log(umaString[-1]); // undefined
console.log(umaString.charAt(4)); // Retorna o valor da posição, aqui fora do range retorna vazio
console.log(umaString.charCodeAt(4)); // Retorna o valor decimal do caracter na tabela ascii
//console.log(umaString.concat(' ei sister')); // pouco usado
console.log(`${umaString} ei Sister`); // concatenação com template strings
console.log(umaString.indexOf('valor', 0)); // retorna o índice, a palavra "valor" começa no índice 4
console.log(umaString.indexOf('Valor', 0)); 
console.log(umaString.lastIndexOf('v', umaString.length)); // retorna o índice da primeira ocorrência
console.log(umaString.match(/[A-Za-z]+/g)); // retorna um array com os valores encontrados (se g)
console.log(umaString.search(/[a-z]+/g)); // retorna o índice da primeira ocorrência
console.log(umaString.replace(/e/g, '3'));
console.log(umaString.slice(2, 7));
console.log(umaString.slice(-3, -1));
console.log(umaString.split(' ', 2))
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
console.log(umaString);
