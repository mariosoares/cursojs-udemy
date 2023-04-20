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
soma2(2, 5); console.log();

// Ex2:
function criarPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
const pessoa = criarPessoa('Matheus', 'Felipe')
console.log(pessoa);

// Acessando função dentro de função
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}

// Maneira 1 (direto e simples)
console.log(falaFrase('Olá')('Mundo!'))

// Maneira 2 -> através de variáveis
const fala = falaFrase('Olá')
const resto = fala('mundo!')
console.log(resto)