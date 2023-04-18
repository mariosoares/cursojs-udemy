// "try {} catch () {}" 
// É usado de forma similar ao if else. O try tenta a execução e se 
// apresentar erro, retorna o valor de catch

try {
    console.log(naoExisto); // try -> tente executar o código
}

catch (err) { // poderia ser qualquer nome, "e", "erro", etc
    console.log('naoExisto não existe'); //executa algum outro código informado se apresentar erro
    //console.log(err); //msg de erro original com stack trace, sem o tratamento
    // salva o código em caso de erro, na variável informada "err" para ser tratado, etc
} // a msg de erro original não deve ser exibida ao usuário por questão de segurança e/ou organização
console.log();

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error ('x e y precisam ser números') ; // lancei o erro, gerei o erro referente a atingir a condição do if
    }
    return x + y};

console.log(soma(1, 2));
//console.log(soma('1', 2)); //aqui, sem o try catch, é lançado meu próprio erro criado com throw
console.log();

try { // tratando o erro criado por mim
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (erro) {
    console.log(erro)
}
console.log();

try { // tratando o erro criado por mim
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (erro) {
    console.log('## Solicitação apresentou erro durante execução ##');
    //console.log(error);
    //console.log('Alguma coisa mais amigável pro usuário.');
}