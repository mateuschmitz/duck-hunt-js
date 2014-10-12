<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8'>
		<title>Duck Junt Js</title>
		<link rel="stylesheet" type="text/css" href="css/styles.min.css">
		<script>
  			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  			ga('create', 'UA-55666991-1', 'auto');
  			ga('send', 'pageview');
		</script>
	</head>
	<body>
		<div class='layer'></div>
		<div id="hunt-space" class="hunt-space" onclick="return shot();">
		</div>
		<div class='final-stats'>
			<strong>GAME OVER</strong>
			<span class="label-score">SCORE</span><br />
			<span id='final-score'>000000</span>
			<input type='button' class="restart-button" value='RESTART' onclick="return runApp('final-stats');">
		</div>
		<input type='button' value='START ►' class='start-button-screen' onclick="return runApp('start-button-screen');">

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

		<script type="text/javascript" src="js/scripts.min.js"></script>
	</body>
</html>