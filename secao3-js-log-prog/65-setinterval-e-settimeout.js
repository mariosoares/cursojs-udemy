function mostraHora() {
    let data = new Date();
    //return data.toLocaleTimeString('pt-BR', {hour12: false});
    return data.toLocaleString();
}

// setInterval(função(){}, timer) -> executa o comando repetidas vezes conforme timer em milissegundos informado
// repetem chamadas de funções ou executam trechos de código, com um tempo de espera fixo entre cada chamada
//Isso retorna um ID único para o intervalo
const timer = setInterval(() => console.log(mostraHora()), 1000); // com arrow function
//const timer = setInterval(function() { console.log(mostraHora());}, 1000); // com função anônima
//console.log(timer);

// setTimeout(função(){}, timer) -> executa o termo o comando uma vez depois do timer informado em milissegundos
//executa uma função ou um trecho de código especificado assim que o cronômetro expira.
setTimeout(() => clearInterval(timer), 5000)
setTimeout(() => console.log('Olá mundo'), 3000)