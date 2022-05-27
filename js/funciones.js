/**
 * funcionalidades del proyecto Juego del ahoracado
 */
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var botonIniciar = document.querySelector("#botoniniciar");
var palabras = ["HOLA", "QUE", "MAS", "COMO", "ESTA", "PC", "LORENA", "JUAN", "JHON", "MORENO"];
var juegoEnCurso = false;


botonIniciar.addEventListener("click",function(){
    botonIniciar.classList.add("ocultar");
    pantalla.classList.remove("ocultar");

    let palabraSecreta = elegirPalabra();
    console.log(palabraSecreta);
    mostrarLineas(palabraSecreta);
    
    
    juegoEnCurso = true;
    document.addEventListener("keypress",function(event){
        if(juegoEnCurso){
            let espacios = document.querySelectorAll(".guiones");
            
            console.log(event.key);
            if(event.which >= 65 && event.which <= 90 ){
                let letra = event.key;
                console.log("Letra valida");
                if(palabraSecreta.includes(letra)){
                    //pintar la letra en su respectivo espacio
                }
            }else{
                console.log("Letra invalida");
            }
        }
    });
});



function elegirPalabra(){
    let i = Math.round(Math.random()*palabras.length)-1;
    if(i<0){
        i=0;
    }
    let palabraElegida = palabras[i];
    console.log(i)
    return palabraElegida;
    
}

function mostrarLineas(palabra){
    let div = document.querySelector("#palabra");
    
    for(let i=0;i<palabra.length;i++){
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("guiones");
        div.appendChild(nuevoDiv);
    }
}

function validacionLetra(event){
    let letraPulsada = event.code;
    if(letraPulsada >= 65 && letraPulsada <= 96){
        console.log(letraPulsada)
    }
    return letraPulsada;
}