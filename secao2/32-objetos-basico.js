// this.variavel permite acessar uma variável do próprio objeto em uma função

const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`Olá! Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
    },
    icrementaIdade (){
        this.idade++;
    }
}

pessoal.fala();
pessoal.icrementaIdade();
pessoal.fala();

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade : 55
}

// a função retorna um objeto, argumento é o valor que é passado para o parâmetro
// função factory, ela cria, ela retorna objetos, é uma fábrica de objetos
function criaPessoa (nome, sobrenome, idade) {
    return{
        nome /*nome: nome*/, sobrenome /*sobrenome: sobrenome*/, idade /*idade: idade*/
    };
}
const pessoa3 = criaPessoa ('Mario', 'Soares', 60);
console.log(pessoa3.nome);

// função factory escrita de outra forma -> cria objetos através de argumentos
const criarHumano = (nome, sobrenome, idade) => {return {nome, sobrenome, idade}}
const humano1 = criarHumano('João', 'Pedro', 23);
const humano2 = criarHumano('Maria', 'Lucia', 33);
const humano3 = criarHumano('Pedro', 'Henrique', 22);
const humano4 = criarHumano('Henrique', 'Guilherme', 27);
const humano5 = criarHumano('Babel', 'Souza', 28);
console.log(humano1.nome, humano5.idade, humano3.sobrenome);