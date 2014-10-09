/**
 * Start App
 */
function runApp () {
	while ((document.getElementsByClassName('duck').length) < 6) {
		generateAleatoryDuck();
	}	
}

/**
 * Adiciona novos patos a tela
 */
function generateAleatoryDuck () {

	var animationClass = ['one', 'two', 'three', 'four', 'five', 'six'];

	for (var i in animationClass) {
		if (document.getElementById('duck-move-' + animationClass[i]) == null) {

			//cria a div externa com movimento
			var duck_move = document.createElement('div');
			duck_move.setAttribute('id', 'duck-move-' + animationClass[i]);
			duck_move.setAttribute('class', 'duck');
			document.getElementById('hunt-space').appendChild(duck_move);

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
	} else {
		alert('Recarregue sua arma');
	}
};

/**
 * Caso o pato seja acertado, aumenta o score
 */
rightShot = function(duck) {
	numBullets = document.getElementById('num-bullets').innerHTML;

	if (numBullets > 0) {
		numAssertions = document.getElementById('num-assertions').innerHTML;
		numAssertions++;

		document.getElementById('num-assertions').innerHTML = numAssertions;
		document.getElementById('hunt-space').removeChild(document.getElementById('duck-move-' + duck));
		generateAleatoryDuck();
	} 
};

/**
 * Recarrega a arma(+15 balas)
 */
reloadGun = function() {
	document.getElementById('num-bullets').innerHTML = 15;
};

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1000; i++) {
	if ((new Date().getTime() - start) > milliseconds){
		break;
		}
	}
}