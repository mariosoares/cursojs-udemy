// As funções não apresentam erros se usarmos argumentos não solicitados
// arguments -> só funciona usando a palavra reservada function (não funciona com arrow function),
// armazena todos os argumentos em uma expressão denominada arguments, como um object com chaves
// o número de parâmetros pode ser visto com funcao.lengtn
// similares aos índices dos arrays, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ...

//PAREI ESTA AULA EM 15:47, em funcao3

function funcao0(){
    console.log(`O valor do arguments[5] é ${arguments[5]}`);
    console.log(typeof arguments);
    console.log(arguments instanceof Array);
    console.log(arguments);
    console.log(`Foram definidos ${funcao0.length} parâmetros para a função.`)
    console.log(`Foram passados ${arguments.length} argumentos na chamada da função.`);
}
funcao0('valor',1,2,3,4,5);

function somaArgumentos(){
    let resultado = 0;
    let resutado1 = 0;
    let i = 0;
    // for (let argumento of arguments){ // retorna o próprio valor do argumento
    //     resultado += argumento;
    // }
    for (i in arguments){  
        //console.log(i); // i retorna o índice do argumento no array
        resultado += arguments[i];
    }
    return resultado;
}
//console.log(`A soma dos argumentos passados na chamada da função é ${somaArgumentos(1,2,3,4,5)}`); console.log();
soma = somaArgumentos(1, 2, 3, 4, 5);
console.log(`A soma dos argumentos passados na chamada da função é ${soma}`); console.log();

function funcao(a, b, c) {
    let total = 0;
    console.log(total, a, b, c); console.log();
}
funcao (1, 2, 3, 4, 5, 6, 7);

// Para parâmetros solicitados mas não passados, seus valores são atribuídos automaticamente como undefined.
function funcao1(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao1(1, 2, 3, 4, 5, 6, 7);
funcao1(1, 2, 3); 

function funcao2(a, b){
    console.log(a + b); //2 + undefined -> NaN
}
funcao2(2);console.log();

// Há duas maneiras mais comuns de atribuir valores padrões para os parâmetros

// Método mais antigo (apresenta algumas falhas devido a existência de valores "falsy" que são interpretados como false)
function valorPadrao1 (a, b, c) {
    a = a || 0
    b = b || 0
    c = c || 0
    return [a, b, c]
}
console.log(valorPadrao1(1, 2), '<-- "c" não foi passado, então ficou com o valor dito como padrão, o 0')

// Método moderno
function valorPadrao2(a=0, b=0, c=0) {
    return [a, b, c]
}
console.log(valorPadrao2(1, 2), '<-- retorna o 0 para o c devido ser o valor padrão')
console.log();

function valorPadrao3(a, b = 2, c = 4){
    console.log(a + b + c);
}
valorPadrao3(2);
valorPadrao3(2, 10);
valorPadrao3(2, 10, 20);
valorPadrao3(2, '', 20);
// neste caso, a única maneira da função assumir o valor padrão de b é com undefined
valorPadrao3(2, undefined, 20); 
valorPadrao3(2, null, 20); // o mull é assumido como zero
//valorPadrao3(2, , 20); -> erro! 
console.log();

// atribuição via desestruturação de um objeto
function funcao3({nome, sobrenome, idade}) { //fazendo a desestruturação nos parâmetros, retirando as variáveis
    console.log(nome, sobrenome, idade);
}

// enviando um objeto literal como parâmetro
funcao3({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});

let obj ={nome: 'Luiz', sobrenome: 'Otávio', idade: 20};
funcao3(obj);console.log();


// desestruturação de um array
function funcao4([valor1, valor2, valor3]) { //fazendo a desestruturação nos parâmetros, retirando as variáveis
    console.log(valor1, valor2, valor3);
}
funcao4(['Luiz', 'Otávio', 30]); 
//poderia passar utilizar uma variável
var1 = ['Luiz Otávio', 'Miranda', 28];
funcao4(var1); console.log(); 

// O operador rest, "...alguma coisa", quando usado como parâmetro de função, cria um array com os valores de todas as entradas passadas
// pelo usuário, como:
// o parametro rest sempre precisa ser o último parâmetro da função, ou dá erro.

// Criar uma função que realiza a operação informada, com todos os demais termos (...rest). Ex:
function conta(operador, acumulador, ...numeros){ // se não usasse rest operator teria que passar um array para numeros
    console.log(operador, acumulador, numeros);
    let texto = ' ';
    for(let numero of numeros){
        texto += numero + ' ';
        if (operador === '+'){
            acumulador += numero;
        }
        if (operador === '-'){
            acumulador -= numero;
        }
        if (operador === '*'){
            acumulador *= numero;
        }
        if (operador === '/'){
            acumulador /= numero;
        }
    }
    //console.log(texto);
    console.log('acumulador --> ',acumulador);
}
conta('+', 0, 20, 30, 40, 50); // conta('+', 0, [20, 30, 40, 50]) -> sem rest operator
conta('*', 1, 20, 30);
console.log();

// Método alternativo para captar o arguments em arrow function através do rest operator
const argumentsArrow = (...args) => { 
    console.log(args);
    console.log(`O valor do arguments[5] é ${args[5]}`);
    console.log(`Foram passados ${arguments.length} argumentos na chamada da função.`);
}
argumentsArrow('valor',1,2,3,4,5);