// arrays são valores por referência
//               0         1        2
let nomes = ['Eduardo', 'Maria', 'Joana'] // array literal
//let nomes = new Array('Eduardo', 'Maria', 'Joana');// utilizando o construtor do array para fazer a mesma coisa, não é muito utilizado
let novo = nomes // o valor é passado por referência
let novo1 = [...nomes] // spread operation (espalhamento), agora o que faço em novo1 não reflete em nomes, ver 81.1 spread operation
novo[2] = 'João';
novo1.pop();
console.log(nomes, novo1);
delete nomes[2]; //remove elemento do array, sem alterar os índices
console.log(nomes);
nomes = ['Eduardo', 'Maria', 'Joana']; 
console.log(nomes.length); 
console.log(nomes); console.log();

// tamanho do array -> atributo length, não é método
// delete array[i] -> deleta um termo no array, mas deixa espaço vazio

// métodos principais
// .pop() faz duas coisas: remove termos no final do array e retorna o elemento removido
// .shift() remove termos no início do array
// .push(elemento) adiciona elemento no final do array
// .unshift(elemento) adiciona elemento no início do array
// .slice(iInicialIncluso, iFinalNaoIncluso) "fatia" o array, criando um novo sem alterar o inicial. Pode usar negativo também, como (1, -2) -> O novo array inicia do índice 1 e eliminará os dois últimos termos do array anterior
// .split('termo') separa a string em arrays excluindo o termo splitado
// .join('termo') une os índices do array em uma string, pondo o termo informado entre as palavras
// .indexOf('termo') retorna o índice que o termo se encontra. Se não possui tal termo no array, retorna -1

console.log(nomes.shift()); //desloca os índices
//console.log(nomes.pop());
const removido = nomes.pop(); console.log(nomes, removido); console.log();
console.log(nomes); console.log();

nomes.push('Anderson');
nomes.unshift('Paioba');
console.log(nomes); console.log();

console.log(nomes.slice(0, -1));
nomes.push('Finian', 'Alberto', 'Walderbson');
console.log(nomes);
console.log(nomes.slice(1, 3)); // criou um novo array
console.log(nomes); console.log(); // o anterior continuou inalterado

// vamos converter uma string em um array
const nome = 'Sanderson Rafael da Cunha Ferreira';
const outronome = 'Luiz , Otávio, Miranda'
const nomesArray = nome.split(' '); // separa por espaço
const outronomeArray = outronome.split(','); // poderia serpara por vírguala e espaço -> (, )
console.log(nomesArray);
console.log(outronomeArray);
console.log(nomesArray.join(' '), '<-- voltou a ser o nome normal'); console.log();

// Método split realizado com for
let palavra = '';
let arrayPalavras = [];
console.log(nome.length);
for (let i in nome) {
    if (nome[i] !== ' ') palavra += nome[i]
    if (nome[i] === ' ' || Number(i) + 1 === nome.length) {
        arrayPalavras.push(palavra);
        palavra = '';
    }
}

console.log(arrayPalavras);