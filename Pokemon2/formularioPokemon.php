<?php
  require 'consulta.php';
?>

<!DOCTYPE html>
<html>
<head>
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

	<link rel="stylesheet" href="estilos.css"/>

	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

	<title></title>
</head>
<body>
  <div class="contenedor">
	<header>
		<div class="wrapper">
			<img src="logoPokemon.png" class="logo">
			<nav>
				<a href="https://www.youtube.com/watch?v=Cu6i_YAnp-I" target="_blank">Como llenar formulario?</a>
				<a href="https://web.facebook.com/profile.php?id=100008774149005" target="_blank">Contactos</a>
			</nav>
		</div>
	</header>

	<form action="operacion_guardar.php" method="POST" class="form-registrer">
		<legend>REGISTRA TU POKEMON FAVORITO :D</legend>
		<input class="controls" type="text" name="Nombre" placeholder="Ingresar nombre del POKEMON">
		<input class="controls" type="text" name="Color" placeholder="Ingresar color del POKEMON">
		<input class="controls" type="text" name="PartidoPolitico" placeholder="Ingresar partido del POKEMON">
		<input class="controls" type="text" name="Numero" placeholder="Ingresar numero del POKEMON">
		<input class="controls" type="text" name="Tipo" placeholder="Ingresar tipo del POKEMON">
		<input class="controls" type="text" name="Altura" placeholder="Ingresar  del altura POKEMON">
		<br>
		<input class="botons" type="submit" value="Guardar Pokemon :v">
	</form>

	<div class="tabla-pokemon">
		<table>
			<thead>
				<tr>
					<h4 class="bueno">Listado de Pokemones</h4>
					<th>Nombre</th>
					<th>Color</th>
					<th>Partido Politico</th>
					<th>Numero</th>
					<th>Tipo</th>
					<th>Altura</th>
					<th>Acciones</th>
				</tr>
			</thead>

			<tbody id="datos">
			<?php
			foreach ($query as $row) { ?>
				<tr>
					<td><?php echo $row['Nombre']; ?></td>
					<td><?php echo $row['Color']; ?></td>
					<td><?php echo $row['PartidoPolitico']; ?></td>
					<td><?php echo $row['Numero']; ?></td>
					<td><?php echo $row['Tipo']; ?></td>
					<td><?php echo $row['Altura']; ?></td>
					<td><a class="btn btn-danger" href="eliminar.php?Nombre=<?php echo $row['Nombre']; ?>">Borrar</a></td>
					
				</tr>
			</tbody>

			<?php
			 }
			 ?>
		</table>
	</div>
  </div>
</body>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<script src="https://code.jquery.com/jquery-3.4.1.slim.js" integrity="sha256-BTlTdQO9/fascB1drekrDVkaKd9PkwBymMlHOiG+qLI=" crossorigin="anonymous"></script> 

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

</html>