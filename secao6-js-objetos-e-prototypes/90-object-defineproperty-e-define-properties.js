// Object.defineProperty(objeto, 'chave', {  } ) <- a chave precisa estar com aspas
//     enumerable: true ou false, -> aparece quando o objeto for exibido?
//     value: valorDaChave, -> define o valor que a chave informada receberá
//     writable: true ou false, -> o valor da chave pode ser alterado?
//     configurable: true ou false -> Pode apagar esta chave? / essas propriedades desta chave podem ser alteradas depois?
// }) 
// (objeto, 'nome_da_propriedade', {objeto_descritor_da_propriedade})

function Produto0(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //aqui estoque é privado, não é enumarável, não é exibido no print
}
const p0 = new Produto0('Camiseta', 20, 3);
console.log(p0, '<-- não exibe estoque'); console.log();

// fazer com que a propriedade estoque seja exibida
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //aqui estoque é privado, não é enumarável, não é exibido no print


    Object.defineProperty(this, 'estoque', {
        enumerable: true, //exibido quando fizer um for in, quando der um print; mostra a chave
        value: estoque, // se não fizer isso imprime como undefined
        writable: false, // posso alterar o valor da propriedade?
        configurable: true // pode apagar a chava?
    })
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 1000;
console.log(p1, '<- estoque não foi alterado'); console.log();

console.log(Object.keys(p1)); 
for (let chave in p1) {
    console.log(chave);
}
console.log();

// similar ao define property, mas se aplica para todas as chaves
// se não informar alguma propriedade, pode assumir o valor de false por padrão
function Pessoa(nome, sobrenome, idade) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        sobrenome: {
            value: sobrenome,
            writable: false,
            enumerable: true
        },
        idade: {
            value: idade,
            configurable: true,
            enumerable: false,
            
        }
    })
}
const pessoa1 = new Pessoa('Sanderson Rafael', 'da Cunha Ferreira', 26);
console.log(pessoa1);
delete pessoa1.idade; // não é o valor, delete a CHAVE idade
console.log(pessoa1.idade); console.log();