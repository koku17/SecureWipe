<html>
	<head>
		<script src="script.js"></script>
	</head>
	<body>
		<h1> SecureWipe </h1>
		<p> Worried about leaking data ?<br/> Wipe your data forever !</p>
		<h1> Select your device to be wiped : </h1>
		<div>
			<select id="drive" hidden></select>
			<progress id='getProgress' value="0" max="100"></progress>
		</div>
		<button id="start" onclick="startProg()" disabled> Start Progress </button>
		<!--button id="stop" onclick="stopProg()" disabled> Stop Progress </button-->
	</body>
</html>
