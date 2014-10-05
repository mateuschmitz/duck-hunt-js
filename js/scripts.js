window.onload = function () {
	generateAleatoryDuck();
};

shot = function() {
	numBullets = document.getElementById('num-bullets').innerHTML;
	
	if (numBullets > 0) {
		document.getElementById('num-bullets').innerHTML = numBullets - 1;
	} else {
		alert('Recarregue sua arma');
	}
};

function generateAleatoryDuck () {
	var duck = document.createElement('img');
	
	duck.setAttribute('src', 'image/duck-flying-right.png');
	duck.setAttribute('class', 'duck-flying-one');
	duck.setAttribute('onclick', 'return rightShot();');

	document.getElementById('hunt-space').appendChild(duck);
};





rightShot = function() {
	numAssertions = document.getElementById('num-assertions').innerHTML;
	numAssertions++;

	document.getElementById('num-assertions').innerHTML = numAssertions;
};

reloadGun = function() {
	document.getElementById('num-bullets').innerHTML = 15;
};