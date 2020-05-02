<?php
  require 'conexion.php';

  $Nombre = $_POST['Nombre'];
  $Color = $_POST['Color'];
  $PartidoPolitico = $_POST['PartidoPolitico'];
  $Numero = $_POST['Numero'];
  $Tipo = $_POST['Tipo'];
  $Altura = $_POST['Altura'];

  $insertar = "INSERT INTO registropokemon
  VALUES ('$Nombre','$Color','$PartidoPolitico','$Numero','$Tipo','$Altura') ";

  $query = mysqli_query($conectar, $insertar);

  if($query) {
    echo "<script> alert('Correcto');
      location.href ='formularioPokemon.php'; </script>";
    
  } else{
  	echo "<script> alert('Incorrecto'); </script>";
  }

?>