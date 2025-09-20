<html>
	<head>
		<script src="script.js"></script>
	</head>
	<body>
		<h1> SecureWipe </h1>
		<p> Worried about leaking data ?<br/> Wipe your data forever !</p>
		<h1> Select your device to be wiped : </h1>
		<select id="drive" hidden>
		</select>
		<p id='getProgress'></p>
		<button id="start" onclick="startProg()"> Start Progress </button>
		<button id="stop" onclick="stopProg()" disabled> Stop Progress </button>
	</body>
</html>
