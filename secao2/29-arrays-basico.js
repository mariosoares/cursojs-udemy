//              0        1        2         3       4
let alunos = ['Luiz', 'Maria', 'João']; //Luiza, Eduardo
//alunos = 123;

// typeof de um array retorna object, array é um objeto
// instanceof Array é usado para verificar se é um array.
console.log(typeof(alunos));
console.log(alunos instanceof Array); console.log();

 //se tivesse definido alunos com const permitiria a edição, ver melhor
alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
console.log(alunos); console.log();

// para adicionar sempre um novo termo, pode-se usar a expressão:
alunos[alunos.length] = 'Bruno';
console.log(alunos); console.log();

// .push('') adiciona um novo termo no final do array, equivale a alunos[alunos.length] = 'novo nome'
alunos.push('Allan');
console.log(alunos); console.log();

// .unshift('') adiciona um novo termo no iníncio do array
alunos.unshift('Marcos');
console.log(alunos); console.log();

// .pop -> remove o último termo
let removido = alunos.pop(); // dá para salvar o aluno que foi removido numa variável
console.log(removido);
console.log(alunos); console.log();

// .shift() -> remove o primeiro termo
let removido1 = alunos.shift(); // dá para salvar o aluno que foi removido numa variável
console.log(removido1);
console.log(alunos); console.log();

// delete alunos[1] vai deletar o termo de índice 1, mas vai ficar vazio, os valores dos demais índices não vão ser alterados 
//fica um elemento vazio,um buraco no array
delete alunos[1];
console.log(alunos);
console.log(alunos[1], alunos[2]); console.log();

//                0       1        2        3         4
const alunos2 = ['Luiz', 'Maria', 'João', 'Luiza', 'Eduardo']; // ver "30-Const Array com valores mutaveis.odt"
console.log(alunos2); console.log();

// .slice (indiceInicial, indiceFinal) -> cria um novo array com termos selecionados
// primeiro indice é onde começa e segundo não é incluído, "exclusive"
// o segundo indice informado pode ser negativo, exclusive também.
console.log(alunos2.slice(0, 3));
console.log(alunos2.slice(0, -2));
console.log(alunos2); console.log();

// .splice (indice, quantidadeExcluida, termosAdiocionados, ...)
alunos2.splice(2, 1, 'Joãozinho') // Exclui um termo a partir do índice 2 (contando com ele), e adiciona nesse mesmo início o nome joãozinho
console.log(alunos2);
alunos2.splice(1, 4); // exclui 4 termos a partir do índice 1 (contando com ele)
alunos2.splice(1, 4, 'Manezinho');
console.log(alunos2); console.log();

// acessando um índice que não existe -> undefined
console.log(alunos[15]);


