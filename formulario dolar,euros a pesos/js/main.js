


function limpiar(){
    document.getElementById("valor").value="";
document.getElementById("pesos").value="";

}


function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 5);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
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

setTimeout(function(){ document.getElementById("pesos").value=total; 
}, 500);


}else{

var pes =parseInt(document.getElementById("valor").value)*675;
setTimeout(function(){document.getElementById("pesos").value=pes;
 }, 500);

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
