// tipo de for interessante para usar com objetos
// pode ser usado para array, object ou strings
// for in -> lê os índices ou chaves do objeto


// Array, vetor -> array de uma dimensão
// este for in lê os índices do array ou as chaves do objeto
const frutas = ['Pêra', 'Maçã', 'Uva'];
for (let i in frutas) {
    console.log(`Índice ${i} -> ${frutas[i]}`);
} 
console.log();

// Object -> para acessar dinamicamente, usa-se a notação objeto[chave], similar ao vetor. Se o contador fosse i, seria: objeto[i] igualmente
// os objetos podem ser acessados também do modo: objeto['chave']
pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}
console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log();

// vai iterar nas chaves do objeto
for (let i in pessoa){
    console.log(`${i} -> ${pessoa[i]}`);
}
console.log();

// String
const palavra = 'Paralelepípedo';
console.log(palavra.length);

let texto = ' '
for (let i in palavra) {
    texto += palavra[i] + ' '; // para utilizar o console.log() sem quebra de linha
}
console.log(texto);