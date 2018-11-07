


function valida(e){//solo numeros
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





function calculoIVA(){
  var errores='';
  var prod=document.getElementById("nom_prod").value;
    var cant=document.getElementById("cantidad").value;
      var precio=document.getElementById("precio").value;
        var desc=document.getElementById("descuento").value;

if(prod==''){  errores+='\n-Campo Nombre del Producto vacio';}
if(cant==''){  errores+='\n-Campo Cantidad vacio';}
if(precio==''){  errores+='\n-Campo Precio vacio';}
if(desc==''){  errores+='\n-Campo Descuentovacio';}

if(errores!=''){
alert('ERRORES\n'+errores);
}else{
var neto=0;
var total_normal=0;
total_normal=(parseInt(precio)*parseInt(cant))
var desss=(parseInt(total_normal)*parseInt(desc)/100);






neto=(parseInt(total_normal)-parseInt(desss));

 document.getElementById("res_neto").value=neto; 
 var iva=parseInt(neto*0.19);
 document.getElementById("res_iva").value=iva; 

  
 document.getElementById("res_total").value=parseInt(iva+neto); 



}



}



function limpiar(){

	document.getElementById("nom_prod").value="";
	document.getElementById("cantidad").value="";
	document.getElementById("precio").value="";
	document.getElementById("descuento").value="";

document.getElementById("res_neto").value="";
document.getElementById("res_iva").value="";
document.getElementById("res_total").value="";
	


}