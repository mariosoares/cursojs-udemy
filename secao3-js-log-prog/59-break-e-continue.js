// break e continue funciona em todos os laços vistos até então
// continue continua para próxima itereção
// break sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
texto = ' ';
for (let numero of numeros){
    console.log(numero);
    texto += numero + ' ';
}
console.log(texto);
console.log();

// // se eu não quiser executar o número 2, posso usar o continue para pular:

for (let numero of numeros){
    if (numero === 2 || numero === 5){
        console.log('Pulei o número', numero );
        continue;
    }
    
    if (numero === 6){
        console.log(`Encontrei o número ${numero}, sai do laço, do bloco`);
        break; // sai do bloco
    }
    console.log(numero);
}
console.log();
