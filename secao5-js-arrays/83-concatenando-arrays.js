// método .concat(termos)
// retorna um novo array que une todo os termos de ambos os arrays

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2)
console.log(a3, '<- com .concat()')

// é possível algo similar utilizando o spread operator, que separa cada termo do array e adiciona cada um individualmente
const a4 = [...a1, 'Luiz', ...a2, [1, 2, 3], [4, 5, 6]]
const a5 = [...a1, 'Luiz', ...a2, [1, 2, 3], ...[4, 5, 6]]
console.log(a4, '<- sem spread')
console.log(a5, '<- com spread'); console.log();

// mais sobre spread e como se comporta
console.log(...a5, '<- livre (numbers)')
console.log([...a5], '<- com colchetes (array)')
console.log(...[a5])
console.log({...a5}, '<- com chaves (object)')
