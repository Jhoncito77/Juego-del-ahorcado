/**
 * funcionalidades del proyecto Juego del ahoracado
 */
var pantalla = document.querySelector("canvas");

var botonIniciar = document.querySelector("#botoniniciar");
var palabras = ["HOLA", "QUE", "MAS", "COMO", "ESTA", "PC", "LORENA", "JUAN", "JHON", "MORENO"];
var juegoEnCurso = false;


botonIniciar.addEventListener("click",function(){
    botonIniciar.classList.add("ocultar");
    pantalla.classList.remove("ocultar");

    let palabraSecreta = elegirPalabra();
    console.log(palabraSecreta);
    mostrarLineas(palabraSecreta);
    let divLetrasNoValidas = document.createElement("div");
    let divPrincipal = document.querySelector("#palabra");
    divLetrasNoValidas.classList.add("divletrasincorrectas");
    divPrincipal.appendChild(divLetrasNoValidas);
    
    juegoEnCurso = true;
    document.addEventListener("keypress",function(event){
        if(juegoEnCurso){
            let espacios = document.querySelectorAll(".guiones");
            
            console.log(event.key);
            if(event.which >= 65 && event.which <= 90 ){
                let letra = event.key;
                
                if(palabraSecreta.includes(letra)){
                    
                    for(let i=0;i<palabraSecreta.length;i++){
                        let ingresarLetraEnDiv = document.createElement("p");
                        ingresarLetraEnDiv.classList.add("letrascorrectas");
                        
                        if(palabraSecreta[i] == letra){
                            ingresarLetraEnDiv.textContent = letra;
                            espacios[i].appendChild(ingresarLetraEnDiv);
                            
                        }
                    }
                }else{
                    let datoLetrasIncorrectas = document.querySelectorAll(".letrasincorrectas");
                    
                    if(datoLetrasIncorrectas.length == 0){
                        agregarLetraIncorrecta(letra);
                        dibujarHorca();
                        return;
                    }
                    let contador=0;
                    for(let i = 0;i<datoLetrasIncorrectas.length;i++){
                        if(datoLetrasIncorrectas[i].textContent == letra){
                            contador++;
                        }
                    }
                    if(contador==0){
                        agregarLetraIncorrecta(letra);
                    }
                        
                }
            }else{
                console.log("Letra no mayuscula");
            }
        }
    });
});

function agregarLetraIncorrecta(letra){
    let ingresarLetraEnDiv = document.createElement("p");
    console.log("letra no es de la palabra secreta")
    let divLetraIncorrecta = document.createElement("div");
    let divLetrasNoValidas = document.querySelector(".divletrasincorrectas");
    divLetrasNoValidas.appendChild(divLetraIncorrecta);
    divLetraIncorrecta.classList.add("divletraincorrecta");
    ingresarLetraEnDiv.classList.remove("letrascorrectas");
    ingresarLetraEnDiv.classList.add("letrasincorrectas");
    ingresarLetraEnDiv.textContent = letra;
    divLetraIncorrecta.appendChild(ingresarLetraEnDiv);
}

function elegirPalabra(){
    let i = Math.round(Math.random()*palabras.length)-1;
    if(i<0){
        i=0;
    }
    let palabraElegida = palabras[i];
    
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

//continuar...
function dibujarHorca(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
                
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        console.log(anchoCanvas,altoCanvas);
        
        
        pincel.fillStyle = "darkblue";
        //450 300  
        console.log(anchoCanvas*0.1 , altoCanvas*0.85, anchoCanvas*0.9, altoCanvas*0.9)
        pincel.fillRect(anchoCanvas*0.1 , altoCanvas*0.9, anchoCanvas*0.8, 4.5);
        pincel.fillRect(anchoCanvas*0.3 , altoCanvas*0.1, 4.5, altoCanvas*0.8);
        pincel.fillRect(anchoCanvas*0.3 , altoCanvas*0.1, anchoCanvas*0.3, 4.5);
        pincel.fillRect(anchoCanvas*0.6 , altoCanvas*0.1, 4.5, altoCanvas*0.1);
        
    }else{
        console.log("No hay getContext")
    }
    
    
}