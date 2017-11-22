<?php
	$data = json_decode(file_get_contents("php://input"));

	include('config.php');

	$db = new DB();
	
	$sql = "SELECT * `usuarios`(`email`,`password`)VALUES('$data->email','$data->password')";

	$data = $db->qryFire($sql);

	echo json_encode($data);
