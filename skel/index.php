<html>
	<head>
		<script src="script.js"></script>
	</head>
	<body>
		<h1> SecureWipe </h1>
		<p> Worried about leaking data ?<br/> Wipe your data forever !</p>
		<h1> Select your device to be wiped : </h1>
		<div style="margin-bottom:1em;"><select id="drive" hidden></select></div>
		<button id="start" onclick="startProg()" disabled> Start Progress </button>
		<!--button id="stop" onclick="stopProg()" disabled> Stop Progress </button-->
		<div><pre id='getProgress'></pre><div>
	</body>
</html>
