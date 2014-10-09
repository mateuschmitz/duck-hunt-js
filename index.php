<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8'>
		<title>Duck Junt Js</title>
		<link rel="stylesheet" type="text/css" href="css/styles.css">
	</head>
	<body>
		
		<div id="hunt-space" class="hunt-space" onclick="return shot();">
		</div>

		<div class="hunter-stats">
			<p>Tiros: <span id='num-bullets'>15</span></p>
			<input type="button" value='Recarregar' onclick="return reloadGun();">
			<input type="button" value='START' onclick="return runApp();">
			<p>Acertos: <span id='num-assertions'>0</span></p>
		</div>

		<script type="text/javascript" src="js/scripts.js"></script>
	</body>
</html>