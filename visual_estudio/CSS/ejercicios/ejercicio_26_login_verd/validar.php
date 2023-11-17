<?php
$usuario=$POST['usuario'];
$contraseña=$POST['contraseña'];
sesion_start();
$_SESION['usuario']=$usuario;

include('db.php');

$consulta="SELECT*FROM usuarios where usuario='$usuario' and contraseña=$contraseña' ";
$resultado=mysqli_query($conexion, $consulta);
