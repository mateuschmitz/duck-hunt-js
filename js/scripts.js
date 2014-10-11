/**
 * SETTINGS
 */
var shotErrors     = 0;
var shotAsserts    = 0;
var numMaxDuck     = 5; //máx 5
var animationClass = ['one', 'two', 'three', 'four', 'five'];

/**
 * Start App
 */
runApp = function (element) {

	document.getElementsByClassName("start-button-screen")[0].style.display = "none";
	document.getElementsByClassName("final-stats")[0].style.display = "none";
	document.getElementsByClassName("layer")[0].style.display = "none";

	document.getElementById('num-bullets').innerHTML = 15;
	document.getElementById('num-lifes').innerHTML = 3;
	shotErrors  = 0;
	shotAsserts = 0;

	while ((document.getElementsByClassName('duck').length) < numMaxDuck) {
		generateAleatoryDuck();
	}
};

/**
 * Adiciona novos patos a tela
 */
generateAleatoryDuck = function () {

	actualScore = parseInt(document.getElementById('num-assertions').innerHTML, 10);

	for (var i in animationClass) {
		if (document.getElementById('duck-move-' + animationClass[i]) === null) {
			
			//cria a div externa com movimento
			var duck_move = document.createElement('div');
			duck_move.setAttribute('id', 'duck-move-' + animationClass[i]);
			duck_move.setAttribute('class', 'duck');
			document.getElementById('hunt-space').appendChild(duck_move);

			//adiciona um pato com velocidade baseada na pontuação atual
			//reduz o máximo em 2s a cada 1000 pontos
			duck_move.setAttribute('style',
					'animation: move_' + animationClass[i] + ' ' + (Math.floor(Math.random() * velocityLevel(actualScore)) + 5) + 's infinite;'
					);

			//cria a div com o sprite do pato
			duck_flying = document.createElement('div');

			if ((animationClass[i] == 'two') || (animationClass[i] == 'four') || (animationClass[i] == 'six')) {
				duck_flying.setAttribute('class', 'duck-flying-left');
			} else {
				duck_flying.setAttribute('class', 'duck-flying-right');
			}
			
			duck_flying.setAttribute('onclick', 'return rightShot("' + animationClass[i] + '");');
			duck_flying.setAttribute('duck', animationClass[i]);
			document.getElementById('duck-move-' + animationClass[i]).appendChild(duck_flying);
			break;
		}
	}
};

/**
 * Função que controla o número de balas restantes na arma
 */
shot = function() {

	numBullets = parseInt(document.getElementById('num-bullets').innerHTML, 10);
	numLifes   = parseInt(document.getElementById('num-lifes').innerHTML, 10);
	huntSpace  = document.getElementById('hunt-space');
	
	if (numBullets > 0) {

		document.getElementById('num-bullets').innerHTML = numBullets - 1;
		shotErrors++;

		if (shotErrors >= 5) {

			//quinto erro da última vida
			if (numLifes == 1) {
				//remover a vida
				document.getElementById('num-lifes').innerHTML = numLifes - 1;
				//zerar o game -> remover os elementos ou pausar
				while (huntSpace.firstChild) {
					huntSpace.removeChild(huntSpace.firstChild);
				}
				//mostrar tela com score e botão de reniciar
				document.getElementById('final-score').innerHTML = document.getElementById('num-assertions').innerHTML;
				document.getElementsByClassName("layer")[0].style.display = "block";
				document.getElementsByClassName("final-stats")[0].style.display = "block";
			} else {
				//remover a vida
				document.getElementById('num-lifes').innerHTML = numLifes - 1;
				shotErrors = 0;
			}

		}

	} else {

		alert('Recarregue sua arma');
	}
};

/**
 * Caso o pato seja acertado, aumenta o score
 */
rightShot = function(duck) {

	numBullets    = parseInt(document.getElementById('num-bullets').innerHTML, 10);
	numAssertions = parseInt(document.getElementById('num-assertions').innerHTML, 10);
	numLifes      = parseInt(document.getElementById('num-lifes').innerHTML, 10);

	if (numBullets > 0) {

		numAssertions += 100;
		shotAsserts++;

		if (shotAsserts >= 10) {

			numLifes++;
			document.getElementById('num-lifes').innerHTML = numLifes;
			shotAsserts = 0;
		}

		document.getElementById('num-assertions').innerHTML = numAssertions;
		document.getElementById('hunt-space').removeChild(document.getElementById('duck-move-' + duck));
		shotErrors = 0;

		generateAleatoryDuck();
	}
};

/**
 * Recarrega a arma(+15 balas)
 */
reloadGun = function() {
	document.getElementById('num-bullets').innerHTML = 15;
};

/**
 * Retorna a velocidade máxima dos patos
 */
velocityLevel = function (score) {
	score = parseInt(score, 10);

	if (score < 1000) {
		return 20;
	}

	if ((score >= 1000) && (score < 2000)) {
		return 18;
	}

	if ((score >= 2000) && (score < 3000)) {
		return 16;
	}

	if ((score >= 3000) && (score < 4000)) {
		return 14;
	}

	if ((score >= 4000) && (score < 5000)) {
		return 12;
	}

	if ((score >= 5000) && (score < 6000)) {
		return 10;
	}

	if (score >= 6000) {
		return 8;
	}

	if (score > 7000) {
		return 6;
	}
};