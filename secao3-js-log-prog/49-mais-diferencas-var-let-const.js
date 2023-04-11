const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

let nome = 'Luiz'; // criando // escopo de bloco global, escopo global
var nome2 = 'Luiz'; // criando
//let nome = 'Otávio'; // erro ao redeclarar no mesmo escopo
var nome2 = 'Otávio'; // sem erro

if (verdadeira) {
   let nome = 'Otávio'; // criando, não está redeclarando, não é a mesma variável
   var nome2 = 'Rogério'; // redeclarando
   console.log(nome, nome2); 
}
console.log(nome, nome2); 
//   if (verdadeira) {
//     var nome2 = 'Ronaldo'; // redeclarando
//     let nome = 'Outra coisa';
//   }
// }

function falaOi () {
  const verdadeira = true;
  if (verdadeira) {
    let nome = 'Luiz';
    var sobrenome = 'Miranda';
  }

  console.log(sobrenome);

}

falaOi();

let sobrenome = 'Miramar';
console.log(sobrenome);