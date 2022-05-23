/**
 * funcionalidades del proyecto Juego del ahoracado
 */
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var botonIniciar = document.querySelector("#botoniniciar");

botonIniciar.addEventListener("click",function(){
    botonIniciar.classList.add("ocultar");
    pantalla.classList.remove("ocultar");

    
});
