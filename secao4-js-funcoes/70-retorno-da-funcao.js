// O return retorna um valor para a função e encerra a sua execução. Só um return é lido por função.
// Nem toda função precisa retornar algo, há algumas que retornam e outras não retornam nada
// Ex1:
function soma (a, b) {
    return a + b;
}
let varSoma = soma(3, 5)
console.log(varSoma);

function soma2 (a, b) {
    console.log(a + b); // não retorna nada, o que vemos quando executamos soma2 não é o retorno da função
}
soma2(2, 5);
retornoSoma2 = soma2(2, 5); console.log('retorno soma2 -->',retornoSoma2); console.log();

// Ex2:
function criarPessoa(nome, sobrenome) {
    return { nome, sobrenome }; // return { nome: nome, sobrenome: sobrenome }
}
const pessoa = criarPessoa('Matheus', 'Felipe');
console.log(pessoa);
console.log(typeof(pessoa));
// criação equivalente
const pessoa1 ={
    nome: "Matheus",
    sobrenome: "Felipe"
};
console.log(pessoa1);
console.log(typeof(pessoa1));console.log();

// Acessando função dentro de função
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

// Maneira 1 (direto e simples)
console.log(falaFrase('Olá')('Mundo!'));

// Maneira 2 -> através de variáveis
const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto); console.log();

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function (n) {
        return n * multiplicador;
    }
};
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2), triplica(2), quadruplica(2));