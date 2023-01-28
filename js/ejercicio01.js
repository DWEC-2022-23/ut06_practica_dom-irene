
const contenidoInput = document.getElementsByTagName("input")[0];
const boton = document.getElementById("botonCambiarColor");
boton.addEventListener("click",cambiarColorH1);

function cambiarColorH1(){
    document.getElementsByTagName("h1")[0].style.color = contenidoInput.value;
}
