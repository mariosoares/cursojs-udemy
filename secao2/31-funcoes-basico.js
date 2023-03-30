function saudacao (nome) {
    return `Bom dia ${nome}!`;
}

const ola = saudacao ('Luiz'); // salvando o retorno da função na variável ola
console.log(ola); console.log();

function soma (x = 0, y = 0){
    const resultado = x + y;
    return resultado; // o que estiver abaixo de return não é executado 
}

console.log(soma (3, 1)); console.log();

// se não tivesse atribuído 0 a x e y na definição da função, aqui resultaria  em NaN:
const result = soma();
console.log(result); console.log();

/**Aqui precisa de ; depois de function
 * const raiz = function(n){
 *  return n ** 0.5;
 * };  
 */

const raiz = n => n ** (1/2); // arrow function expressions, com 1 parâmetro pode tirar o parêntese
console.log(raiz(9)); console.log();

// outro exemplo de arrow function expression
let num = (x, y) => x ** y;
console.log(num(3, 2));

// curiosidade
const result1 = soma('mario', ' soares');
console.log(result1);