/**
 */
window.onload = function () {
	while ((document.getElementsByClassName('duck-flying').length) < 5) {
		
		generateAleatoryDuck();
		setTimeout(1000);

	}
};

function generateAleatoryDuck () {

	var animationClass = ['one', 'two'];
	var duck = document.createElement('img');

	for (var i in animationClass) {
		if ((document.getElementsByClassName(animationClass[i]).length) === 0) {
			duck.setAttribute('src', 'image/duck-flying-' + animationClass[i] + '.png');
			duck.setAttribute('class', 'duck-flying ' + animationClass[i]);
			break;
		}
	}

	duck.setAttribute('onclick', 'return rightShot();');
	document.getElementById('hunt-space').appendChild(duck);
}

shot = function() {
	numBullets = document.getElementById('num-bullets').innerHTML;
	
	if (numBullets > 0) {
		document.getElementById('num-bullets').innerHTML = numBullets - 1;
	} else {
		alert('Recarregue sua arma');
	}
};

rightShot = function() {
	numAssertions = document.getElementById('num-assertions').innerHTML;
	numAssertions++;

	this.style.display = 'none';
	document.getElementById('num-assertions').innerHTML = numAssertions;
};

reloadGun = function() {
	document.getElementById('num-bullets').innerHTML = 15;
};