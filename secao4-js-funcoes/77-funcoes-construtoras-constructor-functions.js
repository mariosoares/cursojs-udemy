// Similar às funções fábrica, retornam objetos
// Função construtora -> objetos
// Função fabrica -> objetos
// Inicia o nome sempre com letra maiúscula (muda a convenção), usando-se antes
// a palavra "new". Construtora -> Pessoa (new)


function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados -> não vão estar disponíveis fora do corpo do objeto, não consegue acessar via ponto
  // const ID = 123456;
  // const metodoInterno = function() {};

  // Atributos ou métodos públicos
  // não precisa usar vírgulas
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() { // poderia ser uma arrow function
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();
p2.metodo();
