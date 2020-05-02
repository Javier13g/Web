<?php
  require 'conexion.php';

  $Nombre= $_REQUEST['Nombre'];

  $consultar ="DELETE FROM registropokemon WHERE Nombre='$Nombre' ";
  $query = mysqli_query($conectar, $consultar);	

  if ($query) {
  	echo "<script> alert('Pokemon Eliminado');
  	location.href='formularioPokemon.php';</script>";
  }  
?>