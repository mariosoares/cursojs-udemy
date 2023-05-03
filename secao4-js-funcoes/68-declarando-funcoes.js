// Declaração de função (Function hoisting)
// Independente de onde a função é declarada, ela é lida com prioridade pelo javascript e pode ser
// usada antes da linha que é registrada
//falaOi();

// É possível retornar algum valor (somente um return. Assim que encontra um return, a função encerra a execução)
function falaOi() {
    console.log('Oi'); console.log();
}
// First-class objects (Objetos de primeira classe) -> as funções podem ser usados como dados, variáveis, etc
// function expression

const souUmDado = function (){ // a constante recebeu a função (anônima) como dado, poderia nomear a função que
    //não alteraria nada
    console.log('Sou um dado.'); console.log();
}
//const souUmDado = () => {return console.log('Sou um dado.')}; // código equivalente
souUmDado(); 

function executaOutraFuncao (funcao){
    console.log('Vou executar sua função abaixo: ');
    funcao();
}
executaOutraFuncao(souUmDado);

// Arrow function
const arrowFunction = () => { console.log('Sou uma arrow function.'); console.log();
}
arrowFunction();

// Dentro de objeto como método. Há duas maneiras de criar:
const objeto = {
    pessoa: 'Rafael',
    reclamar: function(){
        console.log('Que legal!');
    },
    // outra maneira de criar um método no javascript moderno, função como método
    falar(){
        console.log(`${this.pessoa} está falando.`);
    }
}
objeto.reclamar();
objeto.falar();