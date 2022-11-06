const cant = document.getElementById("cant");
const categoria = document.getElementById("catego");
let descuento;
let monto=0;
let total;


function descuentoAsignado() {
    if(categoria.value == `Estudiante`){
        descuento = 0.8
    } else if(categoria.value == `Trainee`){
        descuento = 0.5
    } else {
        descuento = 0.15
    }
    return descuento;
}

function montoFinal() {
    if(cant.value <= 0){
        document.getElementById("msjFinal").innerHTML =`Ingresar cantidad mayor a 0.`;
    } else {
        monto = 200 - 200 * descuentoAsignado()
        total = monto * cant.value
        document.getElementById("msjFinal").innerHTML =`Total a Pagar:$ ${total}`;
    }
}

document.getElementById("myBtn").onclick = montoFinal;


