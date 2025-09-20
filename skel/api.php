<?php
  header('Access-Control-Allow-Origin: *');
  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset ($_GET['getdrives']) && $_GET['getdrives'] == '1')
      echo shell_exec('lsblk -e 7 --json -o MODEL,NAME,SIZE');
      #echo shell_exec('sleep 3; lsblk -e 7 --json -o MODEL,NAME,SIZE');

		if (isset($_GET['check_drive'])) {
			echo shell_exec('[ -b "/dev/'.$_GET['check_drive'].'" ] && echo "{\"drive_status\": true}" || echo "{\"drive_status\": false}"');
		}

		if (isset($_GET['wipe_drive'])) {
			echo shell_exec('echo exec dd if=/dev/zero of=/dev/'.$_GET['wipe_drive'].' status=progress');
		}
  }
?>
