
// similar ao for, mas a variável de controle é criada por fora
// quando se usa while e do while, a gente não sabe quantas vezes o laço, a repetição vai ocorrer
let c = 0;
let texto = ' ';
while (c <= 10){
    texto += c + ' ';
    //console.log(c);
    c++;
}
console.log(texto);
console.log();

const nome = 'Luiz';
let i = 0;
let texto1 = ' ';
while (i < nome.length){
    texto1 += nome[i] + ' '; 
    i++;
}
console.log(texto1);
console.log();

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // vantagem do Math.floor() em vez do toFixed(0), é que ele transforma o valor da
    // variável para o arredondado, enquanto o toFixed apenas mostra arredondado, sem alterar o valor 
}
let rand = random(1, 50);
console.log(rand);
console.log();

texto = ' ';
while (rand !== 10){
    rand = random(1, 50);
    texto += rand + ' ';
   // console.log(rand);
}
console.log(texto);

// similar ao while, porém, executa o bloco e depois que testa a condição, logo, sempre executa pelo menos uma vez
let d = 0;
do {
    console.log(d);
} while (d !== 0);       // Assim que testa a condição, resulta em falso e termina a execução

texto = ' ';
do {
    rand = random (1, 50);
    texto += rand + ' ';
    
}while (rand !== 10);
console.log(texto);