/* 
&& -> AND -> E -> Todas expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Ao menos uma expressão precisa retornar true
! -> NOT -> NÃO
Valores que avaliam para false (falsy): 
false
'' "" ``
null / undefined
NaN
0
*/
const expressao = true && true && false && true;
console.log(expressao); console.log();

const expressao1 = true || true || false || true;
console.log(expressao1); console.log();

console.log('Pedro' || 'Ana');




