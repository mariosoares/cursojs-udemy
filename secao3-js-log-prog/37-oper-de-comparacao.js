/* 
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (=atribuição) (valor) *** não é recomendável usar
=== igualdade estrita (valor e tipo)
!= diferença (valor) *** também não usamos
!== diferença estrita (valor e tipo)
*/
const comp = 10 > 5; //retorna um valor booleano
console.log(comp); console.log();

//exemplo do operador que não devemos usar
const num1 = 10; /*const num2 = 10;*/ const num2 = '10';
const comp1 = num1 == num2; //só deveria ser true quando num1 e num2 fossem Number
console.log(comp1); console.log();

// usando o operador correto
const comp2 = num1 === num2;
console.log(comp2);