<?php
	$data = json_decode(file_get_contents("php://input"));

	include('config.php');

	$db = new DB();
	
	$sql = "INSERT INTO `usuarios`(`nombre`,`apellido`,`email`,`password`,`carrera`,`sede`)VALUES('$data->nombre','$data->apellido','$data->email','$data->password','$data->carrera','$data->sede')";

 $data = $db->qryFireUsuario($sql);

 echo json_encode($data);
