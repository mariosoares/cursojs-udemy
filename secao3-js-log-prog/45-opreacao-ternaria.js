// há dois tipos:
// 1:

const pontuacaoUsuario = 999;
if (pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
}
else{
    console.log('Usuário normal');
}
console.log();
//  código equivalente ao if/else acima com operação ternária
// (condição) ? 'Valor para verdadeiro" : 'Valor para falso';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
console.log(nivelUsuario);

// outro exemplo do primeiro caso
const salarioMinimo = 1302;
const necessarioParaViver = 2000;
const resposta = salarioMinimo >= necessarioParaViver ? 'Você viverá bem' : 'Você não viverá bem';
console.log(resposta); console.log();

// 2: atribui valores padrão para caso o primeiro resulte false (ou falsy)
// setando um valor padrão/fall back para a variável
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);