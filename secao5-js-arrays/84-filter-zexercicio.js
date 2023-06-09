// Retornar as pessoas que tem o nome com 5 letras ou mais
// Retornar as pessoas com mais de 50 anos
// Retornar as pessoas cujo nome termina com a


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

console.log(pessoas[0]);
console.log(pessoas.nome);
console.log(pessoas[0].nome);
console.log(pessoas[0].idade);
console.log(pessoas[0].nome.length); console.log();

// 1:
// o return só precisa dar verdadeiro ou falso. Assim o valor é incluído ou não
const varNomeLongo = (elem, ind, obj) => { return elem.nome.length > 5 };
const nomeLongo = pessoas.filter(varNomeLongo);
//const nomeLongo = pessoas.filter(pessoa => pessoa.nome.length >= 5); // dá verdadeiro para os nomes >= 5, adicionando ao novo array
console.log(nomeLongo); console.log();

// 2:
//const maiorIdade = pessoas.filter(pessoa => pessoa.idade > 50) // código do professor
const varMaiorIdade = (elem, ind, obj) => {return elem.idade > 50};
const maiorIdade = pessoas.filter(varMaiorIdade);
//const maiorIdade = pessoas.filter((pessoa) => { return pessoa.idade > 50});
console.log(maiorIdade); console.log();

// 3 ->  minha solução
// const terminaA = pessoas.filter((pessoa) => {return pessoa.nome[pessoa.nome.length - 1] === 'a'});
// console.log(terminaA);
const varTerminaComA = (elem, ind, obj) => {return elem.nome[elem.nome.length - 1] === 'a'};
const terminaComA = pessoas.filter(varTerminaComA);
//const terminaComA = pessoas.filter(pessoa => pessoa.nome[pessoa.nome.length - 1] === 'a');
console.log(terminaComA); console.log();

// 3: -> solução do professor (novos conceitos)
const nomeTerminaComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA, '<-- professor');
