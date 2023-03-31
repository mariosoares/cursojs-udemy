//Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) -> são copiados
//Referência (mutável) - array, object, function -> passados por referência

let nome = 'Luiz';
nome[0] = 'R' // não vai alterar porque a string em si é imutável, embora sua variável possa variar
console.log(nome[0], nome, '<---Não alterou para "R"'); console.log();

//Diferença primitivo e referência
let a = 'A';
let b = a;
a = 'Novo A';
console.log(a, b, '<--- O valor da variável a alterou, mas b não'); console.log();

//No caso de referência, eles apontam para o mesmo lugar da memória, então:
let c = [1, 2, 3];
let d = c;
c.push(4);
console.log(c, d, '<--- os dois foram modificados ao alterar c');console.log();

//Copiar array em vez de referenciar: podemos usar v = [...var]
let i = [1, 5, 3];
let k = [...i] // também funciona para objects, seria {...i} em vez de [...i]
i.push(4);
console.log(i, '<!=>', k);

// referência e passagem por valor com objetos
const m = {
    nome: 'Luiz',
    sobrenome:'Otávio'
};
const p = m; //passagem por referência
m.nome = 'João';
console.log(p); console.log()

const x = {
    nome: 'Luiz',
    sobrenome:'Otávio'
};
const y = {...x}; // passagem por valor
x.nome = 'João';
console.log(y); console.log()