<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Connection: keep-alive');
flush();

if($_SERVER['REQUEST_METHOD'] === 'GET'){
	if(isset($_GET['wipe_drive'])){
		$cmd = 'for i in {1..100}; do echo $i ; sleep .1 ; done';
		//$cmd = "dd if=/dev/urandom of=/dev/null bs=1G count=4 2>&1";

		$process = popen($cmd, 'r');
		if(!$process){
			echo "data: Command `$cmd' failed\n\n";
			flush();
			pclose($process);
			exit;
		}

		while(!feof($process)){
			$line=fgets($process);
			if($line!==false){
				echo "data: ".trim($line)."\n\n";
				ob_flush();
				flush();
			}
		}

		pclose($process);
		echo "data: DONE\n\n";
		flush();
	}
}
