var botonAgregarPalabra = document.querySelector("#botonnuevapalabra");



botonAgregarPalabra.addEventListener("click",function(){
    botonAgregarPalabra.classList.add("ocultar");
    let botonIniciarJuego = document.querySelector("#botoniniciar");
    botonIniciarJuego.classList.add("ocultar");
    let inputPalabraNueva = document.querySelector("#input");
    inputPalabraNueva.classList.remove("ocultar");
    let botonGuardar = document.querySelector("#botonGuardar");
    botonGuardar.classList.remove("ocultar");
    let botonCancelar = document.querySelector("#botonCancelar");
    botonCancelar.classList.remove("ocultar");
    let icono = document.querySelector("#icono");
    icono.classList.remove("ocultar");
    let recomendacion = document.querySelector("#recomendacion");
    recomendacion.classList.remove("ocultar");
});