// splice(indiceInicial, indicesRemovidos, termosAdicionados...)
//(qual_índice_quero_começar, quantos_elementos_quero_remover, elementos_para_adicionar_separados_por_vírgula)
// faz o que pop(), push(), shift() e unshift fazem
// pode realizar basicamente todas funcionalidades dos métodos básicos para arrays
// é permitido usar negativo também
// retorna um array com os itens removidos, o pop() retorna o(s) elemento(s)
// splice(-1, 1) === pop(); splice(0, 1) === shift(); splice(array.length, 0, 'Luiz) === push(); splice(0, 0, 'Luiz') === unshift()

// negativos    -5       -4        -3         -2        -1
// positivos     0        1         2          3         4
let nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

const removidos = nomes.splice(-3, 2);
console.log(nomes, removidos); console.log(); //removidos é um array também

nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// para remover do índice informado até o final, usa-se (n, Number.MAX_VALUE)
nomes.splice(1, Number.MAX_VALUE);
console.log(Number.MAX_VALUE); // maior número que pode existir em javascript
console.log(nomes); console.log();

nomes.push('João', 'Eduardo', 'Gabriel', 'Júlia');
console.log(nomes); console.log();

nomes.splice(3, 0, 'Outro Eduardo', 'Antes do Gabriel')
console.log(nomes); console.log();

nomes.splice(3, 2);
console.log(nomes); console.log();

//Simulando o shift(), unshift(), pop() e push()

nomes = ['João', 'Eduardo', 'Júlia'];

//shift
nomes.splice(0, 1);
console.log(nomes); console.log();


//unshift
nomes = ['João', 'Eduardo', 'Júlia']; 
nomes.splice(0, 0, 'Luiz');
console.log(nomes);
console.log();

//pop
nomes = ['João', 'Eduardo', 'Júlia']; 
nomes.splice(-1, 1);
console.log(nomes);
console.log();

//push
nomes = ['João', 'Eduardo', 'Júlia']; 
nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes);
console.log();