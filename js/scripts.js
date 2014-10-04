
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

	document.getElementById('num-assertions').innerHTML = numAssertions;
};

reloadGun = function() {
	document.getElementById('num-bullets').innerHTML = 15;
};