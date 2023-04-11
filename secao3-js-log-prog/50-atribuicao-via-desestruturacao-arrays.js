// ver 23-exercicio-variaveis.js
// as reticências podem ser rest e spread: (...termo) (obter resto), (...termo) será spread (espalhar / distribuir)
//            i: 0  1  2  3  4  5  6  7  8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90] // se for const, as atribuições futuras precisam ser const. 
//Se for let, as próximas precisam ser let
const [primNumero, segNumero , tercNumero, ...resto] = numeros; // ...rest operation -> resto, ...spread -> espalhar
console.log(primNumero, segNumero, tercNumero); 
console.log(resto); console.log();

// Possiblidade 2: os espaços vazios pulam o termo
const [um, , tres, , cinco, , sete] = numeros
console.log(um, tres, cinco); console.log();

// Array dentro de array
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros1 [1][2], '<----- índice 2 do segundo array dentro do array'); console.log();

// atribuição via desestruturação (destructuring)
// pegando o número seis e atribuindo à const 
const [ , [ , , numSeis]] = numeros1; // pulou o índice 0 para ir ao índice 1, dentro do índice 1 puleouo índice 0 e 1 
// para pegar o termo de índice 2 e associar à variável
console.log(numSeis); 
const [lista1, lista2, lista3] = numeros1;
console.log(lista3); console.log();

// outro método é separar os vetores // também é possível setar valores padrões, caso não encontre os arrays
const [list1, list2, list3, list4 = [10, 11, 12]] = numeros1;
console.log(list3[2], '<-- último termo do terceiro array interno');
console.log(list4, '<---- valor padrão que foi atribuído'); console.log();




