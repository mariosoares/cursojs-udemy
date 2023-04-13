// Similar ao for in, porém, já retorna o valor em vez de o índice, não sendo necessário
// digitar: array[i], digitando somente: i
// Só funciona para array e string

// resumo:
// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// Array
const pessoas = ['Luiz', 'Otávio', 'Henrique']
for (let valor of pessoas) {
    console.log(valor);
}


// String
let texto = ' '
const nome = 'Luiz Otávio'
for (valor of nome) {
    texto += valor + ' ';
    //console.log(valor);
   
}
console.log(texto);

// usando os três for para comparar: for clássico, for in e for of
console.log('saída do for clássico: ');
for (let i =0; i < pessoas.length; i++){
    console.log(pessoas[i]);
}
console.log('### \nsaída do for in:');

for (let i in pessoas){
    console.log(pessoas[i]);
}
console.log('### \nsaída do for of:');
for ( let i of pessoas){
    console.log(i);
}
console.log();
// antecipando e mostrando o funcionamento do forEach
pessoas.forEach(function (valor, indice){
    console.log(valor, indice);
})