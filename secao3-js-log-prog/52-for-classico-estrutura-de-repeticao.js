// Funciona para Arrays e Strings
// variaǘel de controle; condição de parada; incremento/decremento da variável
// o incremento não precisa ser de um em um poderira ser -> i +=10 (dez em dez)
for (let i = 1; i <= 5; i++){
    console.log(`${i}ª linha`);
}
console.log();

// pode ser negativo também
for (let i = -1; i >= -5; i--){
    console.log(`Gastou ${i}, agora deve no total R$ ${i},00`);
}
console.log();

for (let i = 0; i <= 5; i++){
    const par = i % 2 === 0;
    const par1 = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(`${i}: ${par} ***** ${i}: ${par1}`);
}
console.log();
// percorrer array clássico
const frutas = ['Maçã', 'Pêra', 'Banana', 'Goiaba'];
for (let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i} -> ${frutas[i]}`);
}
console.log();
console.log(frutas[1]);
console.log(frutas.length);


