


function limpiar(){
    document.getElementById("valor").value="";
document.getElementById("pesos").value="";



}
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

function calcular2(){

 
var tipo = document.getElementById("sel1").value;

if (tipo == 1) {

var total =parseInt(document.getElementById("valor").value)*772;

document.getElementById("pesos").value=total;

}else{

var pes =parseInt(document.getElementById("valor").value)*675;

document.getElementById("pesos").value=pes;

}

}


function valida(e){
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
