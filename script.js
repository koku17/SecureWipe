getProgress = () => {
	//fetch('http://localhost:9080?check_drive=' + document.getElementById('drive').value)
	fetch('http://192.168.1.39:9080?check_drive=' + document.getElementById('drive').value)
	.then(response => response.json())
	.then(live => {
		if (live.drive_status == true)
	  fetch('http://192.168.1.39:9080?wipe_drive=' + document.getElementById('drive').value)
	  .then(response => response.text())
	  .then(console.log);
	});
};

var setProgress = null;

function startProg() {
	if (setProgress === null)
		setProgress = setInterval(getProgress, 100);
	document.getElementById('start').disabled = true;
	document.getElementById('stop').disabled = false;
	console.log('started progress');
}

function stopProg() {
	if (setProgress !== null) {
		setProgress = clearInterval(setProgress);
		setProgress = null;
	}
	document.getElementById('stop').disabled = true;
	document.getElementById('start').disabled = false;
	console.log('stoped progress');
}

//get_drives = 'http://localhost:9080?getdrives=1';
get_drives = 'http://192.168.1.39:9080?getdrives=1';

fetch(get_drives)
.then(promise => promise.json())
.then(drives => {
	console.log('FETCH: ' + get_drives + '\nFound following drives: ');
	if (drives.blockdevices.length > 1)
		document.getElementById('drive').innerHTML += '<option selected disabled> Select Device </option>';
	drives.blockdevices.forEach(drive => {
	document.getElementById('drive').innerHTML += '<option value="' + drive.name + '">' + drive.model + ' (' + drive.size + ')</option>';
	console.log(drive.model + ' (' + drive.size + ')');
	});
	document.getElementById('drive').hidden = false;
});
