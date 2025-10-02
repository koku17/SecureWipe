let get_drives = 'api.php?getdrives=1';
var setProgress = null;

getProgress = () => {
	fetch('api.php?check_drive=' + document.getElementById('drive').value)
	.then(response => response.json())
	.then(live => {
		if (live.drive_status == true) {
			fetch('api.php?wipe_drive=' + document.getElementById('drive').value)
				.then(response => response.text())
				.then(console.log);
		} else {
			alert ("Device " + document.getElementById('drive').value + " got disconnected");
			getDrives ();
		}
	});
};

function startProg() {
	if (setProgress === null)
		setProgress = setInterval(getProgress, 100);
	document.getElementById('drive').disabled = true;
	document.getElementById('start').disabled = true;
	document.getElementById('getProgress').innerHTML = '';
	var get_progress = 'run.php?wipe_drive='+document.getElementById('drive');
	var stream = new EventSource(get_progress);
	console.log('Stream Started');
	stream.onmessage = (e) => {
		if (e.data === 'DONE'){
			stream.close();
			setProgress = clearInterval(setProgress);
			setProgress = null;
			document.getElementById('drive').disabled = false;
			document.getElementById('start').disabled = false;
			return;
		}
		document.getElementById('getProgress').innerHTML = e.data;
		document.getElementById('getProgress').scrollTop = document.getElementById('getProgress').scrollHeight;
	};
}

function getDrives () {
	fetch(get_drives)
	.then(promise => promise.json())
	.then(drives => {
		console.log('FETCH: ' + get_drives + '\nFound following drives: ');
		document.getElementById('drive').innerHTML = ''; // reset the prompt
		if (drives.blockdevices.length > 1) {
			document.getElementById('drive').innerHTML += '<option selected disabled> Select Device </option>';
			document.getElementById('drive').addEventListener ('change', () => {
				document.getElementById('start').disabled = false;
			});
		} else
				document.getElementById('start').disabled = false;
		drives.blockdevices.forEach(drive => {
			document.getElementById('drive').innerHTML += '<option value="' + drive.name + '">' + drive.model + ' (' + drive.size + ')</option>';
			console.log(drive.model + ' (' + drive.size + ')');
		});
		document.getElementById('drive').hidden = false;
	});
}

getDrives ();
