// Basicamente o closure é a habilidade da função de acessar o seu escopo léxico
// Global

//Dosi exemplos seguintes do MDN

function init() {
    let name = "Mozilla"; // name é uma variável local criada pelo init
    function displayName() {
      // displayName() é a função interna, uma closure
      console.log(name); // usa a variável declarada na função pai
    }
    displayName();
  }
  init();

  //Se você rodar este código o mesmo terá exatamente o mesmo efeito que o init() do exemplo anterior: a palavra "Mozilla" será mostrada
  //na caixa de alerta. O que é diferente - e interessante - é o fato de que a função interna do displayName() foi retornada da
  //função externa antes de ser executada.
function makeFunc() {
    let nameC = "Mozilla";
    function displayName() {
      console.log(nameC);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();
  


function retornaFuncao(){
    const nome = 'Luiz';
    return function(){ //esta função tem acesso a três escopos: o corpo dela, o corpo do pai e do escopo global
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao());
console.dir(funcao());

function retornaFuncao1(){
    const nome = 'Luiz';
    return function(){ 
        return nome;
    };
}

const funcao1 = retornaFuncao1('Luiz');
const funcao2 = retornaFuncao1('João');

console.dir(funcao1());
console.dir(funcao2());

console.log(funcao1(), funcao2());