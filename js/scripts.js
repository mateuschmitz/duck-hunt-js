var errors = 0;
var assert  = 0;

/**
 * Start App
 */
function runApp () {
	if (document.getElementsByClassName("final-stats")[0] !== null) {
		document.getElementsByClassName("final-stats")[0].style.display = "none";
	}

	if (document.getElementsByClassName('start-buton-screen')[0] !== null) {
		// document.getElementById('hunt-space').removeChild(document.getElementsByClassName('start-buton-screen')[0]);
	}
	while ((document.getElementsByClassName('duck').length) < 5	) {
		generateAleatoryDuck();
	}
}

/**
 * Adiciona novos patos a tela
 */
function generateAleatoryDuck () {

	var animationClass = ['one', 'two', 'three', 'four', 'five'];

	for (var i in animationClass) {
		if (document.getElementById('duck-move-' + animationClass[i]) === null) {

			//cria a div externa com movimento
			var duck_move = document.createElement('div');
			duck_move.setAttribute('id', 'duck-move-' + animationClass[i]);
			duck_move.setAttribute('class', 'duck');
			document.getElementById('hunt-space').appendChild(duck_move);

			// if (parseInt(document.getElementById('num-assertions').innerHTML) > 500) {
			// 	duck_move.setAttribute(
			// 					'style', 
			// 					'animation: move_' + animationClass[i] + ' 1s infinite;'
			// 					);
			// } else {
				duck_move.setAttribute(
								'style', 
								'animation: move_' + animationClass[i] + ' ' + (Math.floor(Math.random() * 20) + 5) + 's infinite;'
								);
			// }

			//cria a div com o sprite do pato
			var duck_flying = document.createElement('div');

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
}

/**
 * Função que controla o número de balas restantes na arma
 */
shot = function() {
	numBullets = document.getElementById('num-bullets').innerHTML;
	
	if (numBullets > 0) {
		document.getElementById('num-bullets').innerHTML = numBullets - 1;
		errors++;
	} else {
		alert('Recarregue sua arma');
	}

	if (errors >= 5) {
		numLifes = parseInt(document.getElementById('num-lifes').innerHTML);

		if (numLifes == 1) {
			huntSpace = document.getElementById('hunt-space');
			while (huntSpace.firstChild) {
    			huntSpace.removeChild(huntSpace.firstChild);
			}
		} else {
			errors = 0;
		}
		numLifes--;
		document.getElementById('num-lifes').innerHTML = numLifes;
	}
};

/**
 * Caso o pato seja acertado, aumenta o score
 */
rightShot = function(duck) {
	numBullets = document.getElementById('num-bullets').innerHTML;

	if (numBullets > 0) {
		numAssertions = parseInt(document.getElementById('num-assertions').innerHTML);
		numAssertions += 100;
		assert++;

		if (assert == 5) {
			numLifes = document.getElementById('num-lifes').innerHTML;
			numLifes++;
			document.getElementById('num-lifes').innerHTML = numLifes;
		}

		document.getElementById('num-assertions').innerHTML = numAssertions;
		document.getElementById('hunt-space').removeChild(document.getElementById('duck-move-' + duck));
		errors = 0;
		generateAleatoryDuck();
	}
};

/**
 * Recarrega a arma(+15 balas)
 */
reloadGun = function() {
	document.getElementById('num-bullets').innerHTML = 15;
};