var numeroAleatorioL;				//Variáveis dos números aaleatórios de cada cor.
var numeroAleatorioA;
var numeroAleatorioR;
var numeroAleatorioV;
var intervalo				//variável necessária para a repetição da função "aleatorio"
var idL = "1";						//Váriáveis que determinam o id do quadrado a ser pintado.
var idA = "1";
var idR = "1";
var idV = "1";
var nomeVencedor = null;	//Variável do nome do vencedor, colocando null você define que ela guardará Caracteres
var desempate = 0;			//variável utilizada para analizar se foi Empate ou Vitória.
var timerId = null;			//Variável do nome do vencedor, colocando null você define que ela guardará Caracteres
var tempo = 3;				//Aqui se define o tempo inicial da contagem

//Função para voltar ao menu
//-----Essa função manda esse endereço para a barra de pesquisa
function menu(){
	window.location.href = 'index.html?'; 
}




//Função para Reiniciar a corrida
//-----Essa função basicamente recarrega a página
function reiniciar(){
	document.location.reload(true);	
}




//Função da contagem regressiva
//-----Essa função é responsável por fazer a contagem reressiva do 3 ao 0(GO!)
function contagemR(segundos){
	segundos = segundos - 1;
	document.getElementById('contagemRegressiva').innerHTML = tempo;		//Add na tela o tempo inicial.
	
	document.getElementById('contagemRegressiva').innerHTML = segundos;		//Add o tempo na tela.
	timerId = setTimeout('contagemR('+segundos+')', 1000);					//Código que faz o tempo reressivo da contagem.
	if(segundos == 0){
		document.getElementById('contagemRegressiva').innerHTML = 'GO!'; 	//Aqui quando o tempo chega a 0 aparece a palavra GO!
		repetição();														//Chama a função que repete o a função(aleatorio) até dar um ganhador.
		aleatorio();														//Chama a função "aleatorio".
	}
	if(segundos == -1){
		document.getElementById('contagemRegressiva').innerHTML = ' '; 		//aqui, onde estava acontecendo a contagem, fica vazio.
		clearTimeout(timerId);												//aqui, para a contagem.
	}
}




//Função de repetição
//Essa função fica repetindo a função "aleatorio" a cada segundo
function repetição(){
	intervalo = window.setInterval(aleatorio, 1000);
}




//Função que gera um numero aleatório na variável "numeroAleatorio"
function aleatorio(){
	numeroAleatorioL = Math.floor(Math.random() * 10 + 1);			//Aqui, gera o número aleatório entre 1 e 10.
	numeroAleatorioA = Math.floor(Math.random() * 10 + 1);			//Aqui, gera o número aleatório entre 1 e 10.
	numeroAleatorioR = Math.floor(Math.random() * 10 + 1);			//Aqui, gera o número aleatório entre 1 e 10.
	numeroAleatorioV = Math.floor(Math.random() * 10 + 1);			//Aqui, gera o número aleatório entre 1 e 10.
	processoL();														//Chama a função da cor Laranja
	processoA();														//Chama a função da cor Amarela
	processoR();														//Chama a função da cor Roxo
	processoV();														//Chama a função da cor Verde
}




//Função que determina se a cor LARANJA vai andar ou não
function processoL(){
	
	if (numeroAleatorioL <= 5){				//Aqui se define como a cor anda, se o resultado dessa operação for verdadeiro a cor anda um quadrado
		corL(idL);							//Chama a função para add a cor.
		idL++;								//Add 1 ao contador, para que possa colorir todos os quadrados, um por um.
	}
	if(idL == 11){							//Esse if é necessário para parar:
		nomeVencedor = 'Laranja';			//-Definir quem ganhou.
		desempate = desempate + 1;			//-Parte necessária para a análise de empate ou vitória.
		clearInterval(intervalo);			//-parte que para a corrida.
		vencedor();							//-Chama a função que determina de foi empate ou vitória.
	}
}

//Função para a cor Laranja
//Essa é a função que pinta o quadrado refetente na cor laranja
function corL(idL){
	var corL = document.getElementById('l' + idL); 		//Aqui eu pego o id do quadrado que vai ser pintado, a partir de uma variável setada por um contator
	corL.style.backgroundColor = 'orange';				//Aqui determino a cor do quadrado(background).
}





//Função que determina se a cor  AMARELA vai andar ou não
function processoA(){
	
	if (numeroAleatorioA > 5){
		corA(idA);
		idA++;
	}
	if(idA == 11){
		nomeVencedor = 'Amarelo';
		desempate = desempate + 1;
		clearInterval(intervalo);
		vencedor();
	}
}

//Função para a cor Amarelo
function corA(idA){
	var corA = document.getElementById('a' + idA);
	corA.style.backgroundColor = 'yellow';
}





//Função que determina se a cor ROXO vai andar ou não
function processoR(){
	
	if (numeroAleatorioR % 2){
		corR(idR);
		idR++;
	}
	if(idR == 11){
		nomeVencedor = 'Roxo';
		desempate = desempate + 1;
		clearInterval(intervalo);
		vencedor();
	}
}

//Função para a cor Roxo
function corR(idR){
	var corR = document.getElementById('r' + idR);
	corR.style.backgroundColor = 'purple';
}





//Função que determina se a cor VERDE vai andar ou não
function processoV(){
	
	if (numeroAleatorioV <= 5){
		corV(idV);
		idV++;
	}
	if(idV == 11){
		nomeVencedor = 'Verde';
		desempate = desempate + 1;
		clearInterval(intervalo);
		vencedor();
	}
}

//Função para a cor Verde
function corV(idV){
	var corV = document.getElementById('v' + idV);
	corV.style.backgroundColor = 'green';
}




//Função que determina o vencedor
function vencedor(){
	if(desempate == 1){ 								//Esse if e o método que eu deselvolvi para mostrar o vencedor/Empate.
		document.getElementById('vencedor').innerHTML = nomeVencedor + ' Venceu!';
	}else{
		resolvendoEmpate(nomeVencedor);					//Caso contrário, chama a função de Empate.
	}
	
}





//Função que resolve o Empate
function resolvendoEmpate(nomeVencedor){		
	nomeVencedor = 'Empate!';										//aqui atribui a palavra Empate a variável nomeVencedor.
	document.getElementById('vencedor').innerHTML = nomeVencedor;	//aqui escreve a palavra no lugar do nome do vencedor.
	criaBotao();													//aqui chama a função do botão de reiniciar.
}




//Função que cria botão reiniciar.
//-----Essa função cria um botão já com o Style CSS que eu defini, para poder Reiniciar a corrida.
function criaBotao(){
	var botao = document.createElement('button');						//Cria a tag <button>.
	botao.type = 'button';												//Cria altera a atributo (type) para "button".
	botao.class = 'btn';												//Add a classe "btn" ao botão.
	botao.id = 'botaoReiniciar';										//Add um ID no botão.
	botao.onclick = function(){ reiniciar(); };							//Add o evento "olClick" + a função determinada.
	
	botao.setAttribute('class', 'btn btn-secondary');  					//Aqui altera a classe do bottão.
	
	document.getElementById('controle').appendChild(botao);				//Isso é necesssário para o código saber onde você quer add o botção.
	document.getElementById('botaoReiniciar').innerHTML = 'Reiniciar';	//Aqui add o texto do botão.
}