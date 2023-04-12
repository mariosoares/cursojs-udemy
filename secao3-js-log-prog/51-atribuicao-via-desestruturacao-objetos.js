const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 38,
    // objeto dentro de outro objeto (luiz falou, fiquei com dúvida):
    endereco: {
        logradouro: 'Av Brasil',
        numero: 320
    }
}
// notação de ponto
// const nome = pessoa.nome
console.log(pessoa);
console.log(pessoa.endereco.numero); console.log();

// atribuição via desestruturação -> é possível setar valores padrões, como: {nome = 'Não existe', sobrenome, idade = '0'}
// é possível também alterar a chave pela notação :

// const {nome} = pessoa;
// console.log(nome);
// altera o nome da variável "nome" para "teste"
const {nome: teste = 'Nome dele', sobrenome= 'Sem sobrenome?', idade = 'Sem idade?'} = pessoa;
console.log(teste, sobrenome, idade, '<---- variável nome foi alterada para teste, que teve valor padrão "Nome dele" ');

const {endereco: {logradouro, numero}, endereco} = pessoa;
console.log(logradouro, numero);
console.log(endereco); console.log();

const pessoa2 = {
    nome: 'Fábio',
    sobrenome: 'Augusto',
    idade: 34,
    endereco: {
        logradouro: 'Av Sorocaba',
        numero: 151
    }
}
const {nome, ...resto} = pessoa2; // vai criar um object dividido em "nome / demais termos", ver aula anterior
console.log(nome);
console.log(resto);