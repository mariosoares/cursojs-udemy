//let algumaString = 'Um "texto"';
//let outraString = "Um \"texto\""; // escapando com "\" 
// length // as strings são indexadas a partir de 0 // Caractere de escape \
//               012345678910
let umaString = 'o rato roeu';

console.log(umaString[4]);
console.log(umaString[10]); // undefined para uma posição fora do range
console.log(umaString[-1]); // undefined

console.log(umaString.charAt(4)); // Retorna o valor da posição, aqui fora do range retorna vazio
console.log(umaString.charCodeAt(4)); // Retorna o valor decimal do caracter na tabela ascii

//console.log(umaString.concat(' ei sister')); // pouco usado
console.log(`${umaString} a roupa do rei`); // concatenação com template strings
console.log(umaString.indexOf('rato', 0)); // retorna o índice de "rato" A PARTIR da posição 0, a palavra "valor" começa no índice 4
console.log(umaString.indexOf('r', 4)); //retorna o índice de "r" A PARTIR da posição 4
console.log(umaString.lastIndexOf('r', umaString.length)); // retorna o índice de  "v" ATÉ a posição 10 (11ª letra)
console.log(umaString.lastIndexOf('r', 6)); 

console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[A-Za-z]+/g)); // retorna um array com os valores encontrados (se g)
console.log(umaString.search(/[a-z]+/g)); // retorna o índice da primeira ocorrência
console.log(umaString.replace(/e/g, '3'));
console.log(`##${umaString.slice(2,7)}##`); //exclui extremidade à direita
console.log(umaString.slice(-3, -1)); //com slice podemos ter índices negativos
console.log(umaString.split(' ', 3)); //o segundo parâmetro limita a qtde de ocorrências encontradas que serão mostradas
console.log(umaString.split(' ', 2));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
console.log(umaString.length);
