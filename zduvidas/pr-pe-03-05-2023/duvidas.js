// 1)

const souUmDado = () => { console.log('Sou um dado!')};
//souUmDado(); console.log();

function executaOutraFuncao(funcao){
	 //return funcao(); correção
     return funcao;
}

console.log(typeof souUmDado);
console.log(typeof executaOutraFuncao);
console.log(typeof executaOutraFuncao(souUmDado));

//executaOutraFuncao(souUmDado);

//Em console.log(typeof executaOutraFuncao(souUmDado)); Por que a função é executada se só está sendo passada como parâmetro para typeof

//2) Alguns arrays retornam como elementos NodeList e outros HTMLCollection -> 8-getelement-byname-e-bytagname.html

// 3) getElementsByClassName ==== querySelectorAll(.class)? getElementByID === querySelector(#id)?

// 4) Mesmo atualizando o conteúdo do componente p, o valor da variável conteudoElementoP não atualiza */
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Document</title>
			</head>
			<body>
				<p id="text">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				</p>

				<script>
					const elementoP = document.getElementById('text'); // capturando o ELEMENTO p
					let conteudoElementoP = elementoP.innerHTML; // capturando o CONTEÚDO do elemento p
					console.log(elementoP);    
					console.log(conteudoElementoP);
					
					elementoP.innerHTML = 'Hello World!!!'; // vai definir diretamente o CONTEÚDO do elemento p
					console.log(conteudoElementoP);
					
				</script>
			</body>
			</html>

