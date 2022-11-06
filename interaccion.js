const cant = document.getElementById("cant").value;
const categoria = document.getElementById("catego");
let descuento;
let monto=0;


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
    monto = 200 - 200 * descuentoAsignado()
    document.getElementById("msjFinal").innerHTML =`Total a Pagar:$ ${monto}`;
}

document.getElementById("myBtn").onclick = montoFinal;


