/**
 * funcionalidades del proyecto Juego del ahoracado
 */
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var botonIniciar = document.querySelector("#botoniniciar");

botonIniciar.addEventListener("click",function(){
    botonIniciar.classList.add("ocultar");
    pantalla.classList.remove("ocultar");

    let palabraSecreta = elegirPalabra();
    console.log(palabraSecreta);

});

var palabras = ["HOLA", "QUE", "MAS", "COMO", "ESTA", "PC", "LORENA", "JUAN", "JHON", "MORENO"];

function elegirPalabra(){
    let i = Math.round(Math.random()*palabras.length)-1;
    if(i<0){
        i=0;
    }
    let palabraElegida = palabras[i];
    console.log(i)
    return palabraElegida;
    
}

