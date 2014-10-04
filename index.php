<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8'>
		<title>Duck Junt Js</title>
		<link rel="stylesheet" type="text/css" href="css/styles.css">
	</head>
	<body>
		<div class="hunt-space" onclick="return shot();">
			<img src="image/duck-flying-right.png" class='duck-flying-one' onclick="return rightShot();">
			<!-- <img src="image/duck-flying-left.png" class='duck-flying-two' onclick="alert('BAAANG');"> -->
		</div>
		<div class="hunter-stats">
			<p>Tiros: <span id='num-bullets'>15</span></p><input type="button" value='Recarregar' onclick="return reloadGun();">
			<p>Acertos: <span id='num-assertions'>0</span></p>
		</div>

		<script type="text/javascript" src="js/scripts.js"></script>
	</body>
</html>