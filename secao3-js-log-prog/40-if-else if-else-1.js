/*
Entre 0 - 11:59 - Bom dia
Entre 12 - 17:59 - Boa tarde
Entre 18 - 24 - Boa noite
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

let hora = 12;

if (hora >= 0 && hora < 12){
    console.log('Bom dia!');
}
else if (hora >= 12 && hora < 18){
    console.log('Boa tarde!');
}
else if (hora >= 18 && hora <= 24){
    console.log('Boa noite!');
}
else{
    console.log('Olá! Informe a hora correta!')
}