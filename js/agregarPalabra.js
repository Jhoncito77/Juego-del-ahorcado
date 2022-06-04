var botonAgregarPalabra = document.querySelector("#botonnuevapalabra");
var botonGuardarPalabra = document.querySelector("#botonGuardar");
var icono = document.querySelector("#icono");
var recomendacion = document.querySelector("#recomendacion");
var botonCancelar = document.querySelector("#botonCancelar");
var divBotones = document.querySelector("#divbotones");
var nuevaPalabra = document.querySelector("#input");

botonAgregarPalabra.addEventListener("click",function(){
    botonAgregarPalabra.classList.add("ocultar");
    botonIniciar.classList.add("ocultar");
    nuevaPalabra.classList.remove("ocultar");
    divBotones.classList.remove("ocultar");
    botonGuardarPalabra.classList.remove("ocultar");
    botonCancelar.classList.remove("ocultar");
    icono.classList.remove("ocultar");
    recomendacion.classList.remove("ocultar");
});

//continuar eventos de botones para guardar palabra nueva y cancelar

botonGuardarPalabra.addEventListener("click",function(){
    
    palabras.push(nuevaPalabra.value.toUpperCase());
    icono.classList.add("ocultar");
    recomendacion.classList.add("ocultar");
    botonCancelar.classList.add("ocultar");
    divBotones.classList.add("ocultar");
    nuevaPalabra.classList.add("ocultar");
    botonGuardarPalabra.classList.add("ocultar");

    botonIniciar.click();

});

botonCancelar.addEventListener("click",function(){
    botonAgregarPalabra.classList.remove("ocultar");
    botonIniciar.classList.remove("ocultar");
    nuevaPalabra.classList.add("ocultar");
    divBotones.classList.add("ocultar");
    botonGuardarPalabra.classList.add("ocultar");
    botonCancelar.classList.add("ocultar");
    icono.classList.add("ocultar");
    recomendacion.classList.add("ocultar");
});

botonNuevoJuego.addEventListener("click",function(){
    
    let divLetrasIncorrectas = document.querySelector(".divletrasincorrectas");
    let letrasIncorrectas = document.querySelectorAll(".divletraincorrecta");
    letrasIncorrectas.forEach(element => {
        divLetrasIncorrectas.removeChild(element);
    });
    divLetrasIncorrectas.remove();
    let guiones = document.querySelectorAll(".guiones");
    guiones.forEach(element => {
        divPrincipal.removeChild(element);
    });
    equivocaciones=0;
    aciertos=0;
    contador=0;
    juegoEnCurso=false;
    let mensaje = document.querySelector("#mensaje");
    mensaje.textContent="";
    pantalla.width=pantalla.width;

    botonIniciar.click();
});

botonDesistir.addEventListener("click",function(){
    let divLetrasIncorrectas = document.querySelector(".divletrasincorrectas");
    let letrasIncorrectas = document.querySelectorAll(".divletraincorrecta");
    letrasIncorrectas.forEach(element => {
        divLetrasIncorrectas.removeChild(element);
    });
    divLetrasIncorrectas.remove();
    let guiones = document.querySelectorAll(".guiones");
    guiones.forEach(element => {
        divPrincipal.removeChild(element);
    });
    equivocaciones=0;
    aciertos=0;
    contador=0;
    juegoEnCurso=false;
    let mensaje = document.querySelector("#mensaje");
    mensaje.textContent="";
    pantalla.width=pantalla.width;

    botonNuevaPalabra.classList.remove("ocultar");
    botonIniciar.classList.remove("ocultar");
    pantalla.classList.add("ocultar");
    divBotonesJuego.classList.add("ocultar");
    botonNuevoJuego.classList.add("ocultar");
    botonDesistir.classList.add("ocultar");
    divPrincipal.classList.add("ocultar");
    
})