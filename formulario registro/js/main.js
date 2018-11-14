


function validasolonumero(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
        
    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
function limpiar(){
     
    document.getElementById("error_form").innerHTML="";

}
function checkRut(rut) {
    // Despejar Puntos
    if(document.getElementById("rut").value.length<=10){
        var valor = rut.value.replace('.','');
        // Despejar Guión
        valor = valor.replace('-','');
        
        // Aislar Cuerpo y Dígito Verificador
        cuerpo = valor.slice(0,-1);
        dv = valor.slice(-1).toUpperCase();
        
        // Formatear RUN
        rut.value = cuerpo + '-'+ dv
        
        // Si no cumple con el mínimo ej. (n.nnn.nnn)
        if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
        
        // Calcular Dígito Verificador
        suma = 0;
        multiplo = 2;
        
        // Para cada dígito del Cuerpo
        for(i=1;i<=cuerpo.length;i++) {
        
            // Obtener su Producto con el Múltiplo Correspondiente
            index = multiplo * valor.charAt(cuerpo.length - i);
            
            // Sumar al Contador General
            suma = suma + index;
            
            // Consolidar Múltiplo dentro del rango [2,7]
            if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
      
        }

    }
   
}

function validarEmail(elemento){

    var texto = document.getElementById("email").value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (!regex.test(texto)) {
        document.getElementById("resultado1").innerHTML = "Correo invalido";
    } else {
      document.getElementById("resultado1").innerHTML = "";
    }
  
  }

  function enviar(){
   
   var r1= document.getElementById("rut").value;
   var r2= document.getElementById("fono").value; 
   var r3= document.getElementById("email").value; 
   var r4=  document.getElementById("nombre").value; 
   var r5=  document.getElementById("mensaje").value;
  
  if(r1==""){
    document.getElementById("resultado11").innerHTML = "inserte rut";
  }
  else if(r2==""){
    document.getElementById("resultado1").innerHTML = "inserte fono";
  }
  else if(r3==""){
    document.getElementById("resultado1").innerHTML = "inserte email";
  }
  else if(r4==""){
    document.getElementById("resultado1").innerHTML = "inserte nombre";
  }
  else if(r5==""){
    document.getElementById("resultado1").innerHTML = "inserte mensaje";
  }
  else{
      alert("correo enviado");
   
  }

  }

  function limpiar(){

    document.getElementById("rut").innerHTML = "";
    document.getElementById("fono").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("nombre").innerHTML = "";
    document.getElementById("mensaje").innerHTML = "";

  }