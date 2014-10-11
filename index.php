<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8'>
		<title>Duck Junt Js</title>
		<link rel="stylesheet" type="text/css" href="css/styles.css">
	</head>
	<body>
		
		<div id="hunt-space" class="hunt-space" onclick="return shot();">
			<input type='button' value='START ►' class='start-buton-screen' onclick="return runApp();">
		</div>

		<div class="hunter-stats">
			<div class='div-score'>
				&nbsp;SCORE:<br />
				<span id='num-assertions'>
					0
				</span>
			</div>

			<div class='div-lifes'>
				CONTINUE:<br />
				<img src="image/heart-life.png">
				<span id='num-lifes'>
					3
				</span>
			</div>
			
			<input type="button" class='reload-button' value='Recarregar Arma' onclick="return reloadGun();">
			
			<div class='div-bullets'>
				TIROS:<br />
				<span id='num-bullets'>
					15
				</span>
			</div>
		</div>

		<script type="text/javascript" src="js/scripts.js"></script>
	</body>
</html>