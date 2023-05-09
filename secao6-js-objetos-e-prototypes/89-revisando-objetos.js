// objeto literal: usa chaves
const pessoa = {
    // corpo do objeto
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
console.log(pessoa.nome, pessoa.sobrenome); // notação de ponto ou notação de colchetes
console.log(pessoa['nome'], pessoa['sobrenome']); console.log();

// outra maneira:
const chave = 'nome';
console.log(pessoa[chave]); console.log();

// object Constructor e métodos(funções dentro dos objetos)

const pessoa1 = new Object();
pessoa1.nome = 'Rafael';
// delete pessoa1.nome //se quisesse apagar a chave nome
pessoa1.sobrenome = 'Ferreira';
pessoa1.idade = 26;

pessoa1.falarNome = function() { 
    console.log(`Meu nome é: ${this.nome}`);
    //return (`Meu nome é: ${this.nome}`);
}

pessoa1.getDataNascimento = function() {
    console.log((new Date()).getFullYear() - this.idade);
    const dataAtual = new Date();
    //return dataAtual.getFullYear() - this.idade;
}

pessoa1.falarNome();
pessoa1.getDataNascimento(); console.log();
//console.log(pessoa1.falarNome());
//console.log(pessoa1.getDataNascimento());

// for in para ver as chaves e seus valores
for (let chave in pessoa1){
    console.log(chave); 
}
console.log();
for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}

// Dois tipos de funções que são moldes para criar novos objetos
// Factory functions e Constructor functions
// Mais na frente vamos ver Classes

// padrão de projeto factory functions

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {    // simula que o método é um atributo normal, não sendo necessário chamar como função: ()
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p0 = criaPessoa('Rafael', 'Ferreira');
console.log(p0.nomeCompleto); console.log();


// Padrão de projeto constructor function

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.falaOi = function() {
        console.log(`${this.nome} está falando oi!`);
    }
    //Object.freeze(this) // os dados do objeto não serão alterados, funciona também com array
}

const p1 = new Pessoa('Rafael', 'Ferreira')
Object.freeze(p1); // os dados do objeto não serão alterados
console.log(p1, '<-- Pessoa é o constructor que criou este objeto');
// devido ao freeze, não é possível alterar nada
p1.idade = 35;
delete p1.nome;
console.log(p1, '<- não foi adicionada a idade');
p1.falaOi(); console.log();

const p2 = new Pessoa('Mario', 'Soares');
console.log(p2, '<-- Pessoa é o constructor que criou este objeto');
p2.idade = 35;
delete p2.nome;
console.log(p2, '<- foi adicionada a idade');
p2.falaOi(); console.log();

// This referencia o local onde o termo está inserido.
// EX:

let nome = 'Joãozinho Gente Boa'
let outro = {
    nome: 'João Do Mal',
    homemRuim() {
        console.log(nome)
        console.log(this.nome)
    }
}
// Ao chamar os dois "nome", vemos que a palavra this diferencia qual é exibido
// Como:
outro.homemRuim()

// O this busca a variável dentro do closure (a variável mais próxima), enquanto sem o this, é a variável do Parent ou Prototype

// o comportamento do this varia se usado dentro de uma arrow function e de uma function expression comum
// quando o this é usado numa arrow function, ele trava a referência onde ele está inserido
// com a function expression, ele varia de acordo com quem chama