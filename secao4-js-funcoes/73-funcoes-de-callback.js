//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa
// para completar algum tipo de rotina ou ação.
// No javascript, muitas vezes não temos como controlar quando a função receberá
// os dados que necessita e quando finalizará sua execução devido latência, tempo de resposta
// de servidor e etc. Como exemplo, não é possível prever a ordem que as funções a seguir serão executadas:

//Exemplo da MDN super simples, não precisa ver nada após este exemplo:
function greeting(name) {
    console.log('Olá ' + name);
  }

  greeting('mario');console.log();

  function userInput(callback){
    let nome = 'mario';
    callback(nome);
  }

  userInput(greeting);

// Nesta execução 
/*function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) +
      min;
    return Math.floor(num);
  }*/


function rand() {
    return Math.round(Math.random() * 2000 + 1000) // aciona de 1 a 3 segundos
}
/* 
function f1() {
    setTimeout(function() {
        console.log('f1')
    }, rand())
}
function f2() {
    setTimeout(function() {
        console.log('f2')
    }, rand())
}
function f3() {
    setTimeout(function() {
        console.log('f3')
    }, rand())
}
f1()
f2()
f3()
console.log('Olá mundo!')
setTimeout(() => console.log(), 3001) */

// Caso eu deseje executar na sequência, como devo fazer?
// Através das callbacks: o parâmetro não precisa se chamar callback
// setTimeout está simulando alguma coisa que demoraria na web

function funcao1(callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback()
    }, rand())
}
function funcao2(callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback()
    }, rand())
}
function funcao3(callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback()
    }, rand())
}
funcao1(() => {
    funcao2(() => {
        funcao3(() => {
            console.log('Olá mundo!')
        })
    })
})
funcao1(function() {
    funcao2(function() {
        funcao3(function() {
            console.log('Olá mundo!')
        })
    })
})


// código idêntico ao anterior
funcao1(f1Callback);

function f1Callback() {
  funcao2(f2Callback);
}

function f2Callback() {
  funcao3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo novo!');
}



// Maneira mais resumida com arrow function de expressão única, sem chaves {}
// Ignorar o setTimeout(). Usado para não executar ao mesmo tempo do anterior
setTimeout(() => {
    funcao1(() => funcao2(() => funcao3(() => console.log('Olá mundo!'))))
}, 9001)