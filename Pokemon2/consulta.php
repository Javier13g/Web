<?php
  require 'conexion.php';

  $consultar ="SELECT *FROM registropokemon";
  $query = mysqli_query($conectar, $consultar);	
  $Array = mysqli_fetch_array($query);
?>