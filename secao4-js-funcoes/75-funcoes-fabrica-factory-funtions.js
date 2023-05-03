// Factory function (Função fábrica). Trata-se de funções que retornam (criam) objetos
// Constructor function (Função construtora) na próxima aula
// Ex:
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está falando sobre ${assunto}.`
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
          }
    }
}
const pessoa = criaPessoa('Luiz', 'Otávio', 1.80, 80);
console.log(pessoa.fala('Javascript'), '<-- foi necessário chamar a função com: ()');
console.log('IMC:', pessoa.imc());
console.log(criaPessoa('João', 'Victor').fala('mercado de trabalho'));

// get: faz com que o retorno de uma função seja adquirida diretamente, sem precisar invocar com ()
// "Finge" que a função é um atributo
// set: permite que os valores passados como parâmetro interajam com o get

function criaPessoa1(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        altura,
        peso,
        // Getter
        get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
        },
        // Setter equivalente ao imediatamente abaixo
    //     set nomeCompleto(valor) {
    //         valor = valor.split(' '); // retorna um array
    //         this.nome = valor.shift();
    //         this.sobrenome = valor.join(' ');
    //   },

        // Setter
        set nomeCompleto(vetorNome) {
            this.nome = vetorNome[0]
            this.sobrenome = vetorNome[1]
        }
    }
}
console.log();
const pessoa1 = criaPessoa1('Marcos', 'Vinícios', 1.68, 69);
console.log(pessoa1.nomeCompleto) // chamou o get
console.log('IMC:',pessoa1.imc); // chamou o get

pessoa1.nomeCompleto = (['Felipe', 'Josias']) // modificou os termos do nome através do set
console.log(pessoa1.nomeCompleto, '<->', pessoa1.nome, pessoa1.sobrenome) // chamou o get, agora já modificado

function criaCaneta(comprimento, diametro, ponta) {
    return {
        comprimento,
        diametro,
        ponta,
        tipoDeCaneta() {
            if (ponta <= 0.5) return `Caneta para desenho`
            if (ponta > 0.5 && ponta <= 0.7) return `Caneta para redação`
            if (ponta > 0.7) return `Caneta para rascunho`
        },
        get canetaCompleta() {
            return `A caneta possui ${this.comprimento}cm, com diâmetro do tubo de ${this.diametro}cm e diâmetro de ponta de ${this.ponta}mm`
        }
    }
}
console.log();
const caneta1 = criaCaneta(15, 0.7, 0.7)
console.log(caneta1.tipoDeCaneta())
console.log(caneta1.canetaCompleta) // se botar canetaCompleta(), apresentará erro, pois foi convencionado a não ser tratado como uma função
console.log()


