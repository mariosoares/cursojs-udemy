/* 
&& -> AND -> E -> Todas expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Ao menos uma expressão precisa retornar true
! -> NOT -> NÃO
Qualquer coisa diferente de falsy value avalia em true no JavaScript
Valores que avaliam para false (falsy values): 
false
'' "" ``
null / undefined
NaN
0
*/

console.log(!!false, !!'', !!"", !!``, !!null, !!undefined, !!NaN, !!0); console.log();

// PROPRIEDADES ESPECÍFICAS do &&
// && -> QUANDO ALGUM TERMO RESULTA EM FALSO, A EXPRESSÃO DÁ "RETURN VALOR"
// Isto é: ele retorna o valor FALSO
// Ex:
console.log('João' && 0 && 'Felipe'); // retorna 0 em vez de "false"
console.log('Paulo' && 'Felipe' && 'André'); console.log(); // se não encontra falso, retorna o último valor


// PROPRIEDADES ESPECÍFICAS do ||
// || -> QUANDO ALGUM TERMO RESULTA EM VERDADEIRO, A EXPRESSÃO DÁ "RETURN VALOR"
// Isto é: ele retorna o valor VERDADEIRO
// Ex:
console.log(0 || false || '' || `` || 'Pedro' || true); // retorna o valor verdadeiro, 'pedro'
console.log(false || '' || `` || 0); // se não encontra verdadeiro, retorna o último valor
console.log();

function falaOi() {
    return 'Oi';
}
let vaiExecutar = false;
console.log(vaiExecutar && falaOi());
console.log(vaiExecutar || falaOi());
console.log();
vaiExecutar = true;
console.log(vaiExecutar && falaOi());
console.log(vaiExecutar || falaOi()); console.log();

// pegadinha
const a = 0;
const b = null;
const c = 'false'; //string é avaliada em verdadeiro, se fosse o booleano false, retornaria NaN
const d =  false;
const e = NaN;

console.log(a || b || c || d || e);