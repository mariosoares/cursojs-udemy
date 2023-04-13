// "try {} catch () {}" 
// É usado de forma similar ao if else. O try tenta a execução e se 
// apresentar erro, retorna o valor de catch

try {
    console.log(naoExisto); // tenta código
}
catch (err) {
    console.log('naoExisto não existe'); //executa algum outro código informado se apresentar erro
    //console.log(err); 
    // salva o código em caso de erro, na variável informada "err" para ser tratado, etc
} // a msg de erro original não deve ser exibida ao usuário por questão de segurança e/ou organização

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números') ; // gerei o erro referente a não atingir a condição do if
    }
    return x + y}

console.log();

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (erro) {
    // console.log(erro)
    console.log('## Solicitação apresentou erro durante execução ##');
    //console.log(error);
    //console.log('Alguma coisa mais amigável pro usuário.');
}