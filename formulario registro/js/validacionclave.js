
function seguridad_clave(clave){
    var seguridad = 0;
    if (clave.length!=0){
       if (tiene_numeros(clave) && tiene_letras(clave)){
          seguridad += 30;
       }
       if (tiene_minusculas(clave) && tiene_mayusculas(clave)){
          seguridad += 30;
       }
       if (clave.length >= 4 && clave.length <= 5){
          seguridad += 10;
       }else{
          if (clave.length >= 6 && clave.length <= 8){
             seguridad += 30;
          }else{
             if (clave.length > 8){
                seguridad += 40;
             }
          }
       }
    }
    return seguridad            
 }   
 
 
 
 function muestra_seguridad_clave(clave,formulario){
  document.getElementById("clave2").value="";
  document.getElementById("resultado").innerHTML="";
 
    seguridad=seguridad_clave(clave);
 
 
 
    //formulario.seguridad.value=seguridad + "%";
 var clasee='';
 var tipo='';
 if(seguridad>=0 && seguridad<=20){
   clasee='bg-danger'; tipo='Pobre';
 }else if(seguridad>=21 && seguridad<=40){
  clasee='bg-warning'; tipo='Baja';
 }else if(seguridad>=41 && seguridad<=60){
  clasee='bg-info'; tipo='Alta';
 }
 else if(seguridad>=61 && seguridad<=80){
  clasee='bg-primary'; tipo='Buena';
 }else if(seguridad>81){
   clasee='bg-success'; tipo='Super Buena';
 }
 
 
 
 
 document.getElementById("resultado_seguridad").innerHTML="<p class='"+clasee+"'  style='padding: 10px;'>Seguridad "+tipo+"</p>";
    
 }
 
 
 
 function tiene_numeros(texto){
   var numeros="0123456789";
 
    for(i=0; i<texto.length; i++){
       if (numeros.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }
 
 
 
 function tiene_letras(texto){
   var letras="abcdefghyjklmnñopqrstuvwxyz";
    texto = texto.toLowerCase();
    for(i=0; i<texto.length; i++){
       if (letras.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }
 
 
 
 function tiene_minusculas(texto){
   var letras="abcdefghyjklmnñopqrstuvwxyz";
    for(i=0; i<texto.length; i++){
       if (letras.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }
 
 
 
 function tiene_mayusculas(texto){
   var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    for(i=0; i<texto.length; i++){
       if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }
 
 
 function comp_iguales(){
   var pass1=document.getElementById("clave1").value;
   var pass2=document.getElementById("clave2").value;
 
   if(pass1==pass2){
   document.getElementById("resultado").innerHTML="<p class='bg-success' style='padding: 10px;'>Correcto</p>";
 
   }else{
      document.getElementById("resultado").innerHTML="<p class='bg-danger'  style='padding: 10px;'>Las contraseñas no coinciden</p>";
 
 
 
 
   }
 }