<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css">	 
	 <link rel="stylesheet" type="text/css" href="css/estilo.css">	 	
	  <script src="js/main.js"></script>
		
	</head>
	<body>

<div id="contenido">

<h2>CALCULO</h2>
<div id="error_form"></div>


 <div class="form-group">
 	
    <label for="altura">Altura</label>
    <input type="text" class="form-control" id="altura" onkeypress="return valida(event)" >
  </div>

   <div class="form-group">
    <label for="peso">Peso</label>
    <input type="text" class="form-control" id="peso" onkeypress="return valida(event)" >
  </div>

  <div class="form-group">
	<button type="button" class="btn btn-primary" onclick="calculoIMC()">Calculo IMC</button>
	<button type="button" class="btn btn-success" onclick="limpiar()">Limpiar</button>
</div>
  <h2>RESULTADO</h2>

     <div class="form-group">
    <label for="res_imc">IMC</label>
    <input type="text" class="form-control" id="res_imc" readonly>
  </div>

     <div class="form-group">
    <label for="res_estado">ESTADO</label>
    <input type="text" class="form-control" id="res_estado" readonly >
  </div>



</div>	



	

	</body>
	<footer></footer>
</html>