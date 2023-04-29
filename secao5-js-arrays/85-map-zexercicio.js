// 1-> retornar nomes das pessoas
// 2-> remover a chave "nome"
// 3-> adicionar chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

// 1
const callBack = (elem, ind, obj) => {console.log(elem); return elem.nome};
const retornaNome = pessoas.map(callBack);
console.log(retornaNome); console.log();
// let nomes = pessoas.map((object => object.nome))
// console.log(nomes)

// 2
//const callBack1 = (elem, ind, obj) => {return {idade: elem.idade}};
const callBack1 = (elem, ind, obj) => {delete elem.nome; return elem};
const retiraNome = pessoas.map(callBack1);
console.log(retiraNome); console.log();
// let idades = pessoas.map(object => ({ idade :object.idade }))
// console.log(idades)

//solução do professor
// idades = pessoas.map(obj => {
//     delete obj.nome;     // delete funciona tanto para array como para object
//     return obj;          // ele estará alterando o array original, então cuidado
// });
// console.log(idades, 'ou seja: objeto original foi alterado para:', pessoas);

// 3
let callBack3 = (elem, ind, obj) => { elem.id = ind + 1; return elem;};
let inclueID = pessoas.map(callBack3);
console.log(inclueID);
console.log(pessoas); console.log();

// let callBack4 = (elem, ind, obj) => {const newElem = {...elem}; 
// newElem.id = ind + 1; return newElem;};
// inclueID = pessoas.map(callBack3);
// console.log(inclueID);
// console.log(pessoas); //não funcionou comigo -> retornar os valores originais de pessoas

// ids = pessoas.map((elem, ind) => {
//     elem.id = ind + 1;
//     return elem;
// })
// console.log(ids);