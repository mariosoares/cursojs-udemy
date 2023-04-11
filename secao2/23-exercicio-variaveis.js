let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C ';// A

[varA, varB, varC] = [varB, varC, varA]; //atribuição via desestruturação

console.log(varA, varB, varC);