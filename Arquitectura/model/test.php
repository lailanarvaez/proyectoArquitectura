<?php
include('categoria.php');
	print("<!DOCTYPE html>
		<html>
		<head>
			<title></title>
		</head>
		<body>
			<h1>hola mundo</h1>
		</body>
		</html>");

//TEST PARA ACTUALIZAR UNA CATEGORIA
/*	$array = array("accion"=>'eliminar', "nombre"=>'Hamburguesas');
	$json = json_encode($array);
	header("Location: categoria.php?productJson=$json");

*/
//TEST PARA CREAR UNA CATEGORIA
/*
	$array = array("accion"=>'crear', "nombre"=>'frutas');
	$json = json_encode($array);
	header("Location: categoria.php?productJson=$json");
	*/
//TEST PARA CREAR UN PRODUCTO
	//$array = array("nombre"=>'eliminar', "nombre"=>'Hamburguesas');
	/*$prod = Array("codigo"=>'21atyt', "nombre"=>'test3', "precio"=>3500,"color"=>'color', "subCategoria"=>1, "comanda"=>1);
	$gusto=array(2,3);
	$array = array("accion"=>'crearPyG', "producto"=>$prod, "gustos"=>$gusto);
	*/
	$array = array("nombre"=>'1',"apellido"=>'1',"email"=>'1',"password"=>'1',"carrera"=>'1',"sede"=>'1');
	$data = json_encode($array);
	header("Location: registrarUsuario.php?json=$data");
	
?>
