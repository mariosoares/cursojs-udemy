// Basicamente o closure é a habilidade da função de acessar o seu escopo léxico
// Global
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

console.dir(funcao1);
console.dir(funcao2);

console.log(funcao1(), funcao2());