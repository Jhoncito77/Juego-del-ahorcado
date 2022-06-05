/**
 * funcionalidades del proyecto Juego del ahoracado
 */
var pantalla = document.querySelector("canvas");

var botonIniciar = document.querySelector("#botoniniciar");
var botonNuevaPalabra = document.querySelector("#botonnuevapalabra");
var divPrincipal = document.querySelector("#palabra");
var botonNuevoJuego = document.querySelector("#nuevoJuego");
var botonDesistir = document.querySelector("#desistir");
var divBotonesJuego = document.querySelector("#divbotonesjuego");
var palabras = ["HOLA", "CABALLO", "MACHADO", "REINARAS", "CABALLOS", "PC", "LORENA", "DANIEL", "JHON", "MORENO"];
var juegoEnCurso = false;
var equivocaciones = 0;
var aciertos = 0;
var contador=0;
var palabraSecreta="";

botonIniciar.addEventListener("click",function(){
    
    botonNuevaPalabra.classList.add("ocultar");
    botonIniciar.classList.add("ocultar");
    pantalla.classList.remove("ocultar");
    divBotonesJuego.classList.remove("ocultar");
    botonNuevoJuego.classList.remove("ocultar");
    botonDesistir.classList.remove("ocultar");
    dibujarHorca1();
    palabraSecreta = elegirPalabra(palabras);
    
    mostrarLineas(palabraSecreta);
    let divLetrasNoValidas = document.createElement("div");
    
    divPrincipal.classList.remove("ocultar");
    divLetrasNoValidas.classList.add("divletrasincorrectas");
    divPrincipal.appendChild(divLetrasNoValidas);
    
    juegoEnCurso = true;

    
});

function validarAciertos(letra){
    let letrasUsadas = document.querySelectorAll(".letrascorrectas");
    letrasUsadas.forEach(element => {
        if(element.textContent == letra){
            letra = "" ;
            
        }
    });
    return letra;
}

document.addEventListener("keypress",function(event){
    if(juegoEnCurso){
        let espacios = document.querySelectorAll(".guiones");
        if(event.which >= 65 && event.which <= 90 ){
            let letra = event.key;
            if(palabraSecreta.includes(letra)){
                let letraValidada = validarAciertos(letra);
                for(let i=0;i<palabraSecreta.length;i++){
                    let ingresarLetraEnDiv = document.createElement("p");
                    ingresarLetraEnDiv.classList.add("letrascorrectas");
                     if(palabraSecreta[i] == letraValidada){
                        ingresarLetraEnDiv.textContent = letraValidada;
                        espacios[i].appendChild(ingresarLetraEnDiv);
                        aciertos++;
                    }
                }
                
                if(palabraSecreta.length==aciertos){
                    
                    let final = true
                    finDelJuego(final);
                }
            }else{
                let datoLetrasIncorrectas = document.querySelectorAll(".letrasincorrectas");
                
                if(datoLetrasIncorrectas.length == 0){
                    agregarLetraIncorrecta(letra);
                    dibujarHorca2();
                    return;
                }
                
                for(let i = 0;i<datoLetrasIncorrectas.length;i++){
                    if(datoLetrasIncorrectas[i].textContent == letra){
                        contador++;
                    }
                }
                
                if(contador==0){
                    agregarLetraIncorrecta(letra);
                    equivocaciones++;
                }
                if(equivocaciones==1){
                    dibujarHorca3();
                }if(equivocaciones==2){
                    dibujarHorca4();
                }if(equivocaciones==3){
                    dibujarCabeza();
                }if(equivocaciones==4){
                    dibujarTronco();
                }if(equivocaciones==5){
                    dibujarPiernaIzquierda();
                }if(equivocaciones==6){
                    dibujarPiernaDerecha();
                }if(equivocaciones==7){
                    dibujarBrazoIzquierdo();
                }if(equivocaciones==8){
                    dibujarBrazoDerecho();
                    let final = false;
                    finDelJuego(final);
                }
                contador=0;    
            }
        }else{
            console.log("Letra no mayuscula");
        }
    }
});

function agregarLetraIncorrecta(letra){
    let ingresarLetraEnDiv = document.createElement("p");
    
    let divLetraIncorrecta = document.createElement("div");
    let divLetrasNoValidas = document.querySelector(".divletrasincorrectas");
    divLetrasNoValidas.appendChild(divLetraIncorrecta);
    divLetraIncorrecta.classList.add("divletraincorrecta");
    ingresarLetraEnDiv.classList.remove("letrascorrectas");
    ingresarLetraEnDiv.classList.add("letrasincorrectas");
    ingresarLetraEnDiv.textContent = letra;
    divLetraIncorrecta.appendChild(ingresarLetraEnDiv);
}

function elegirPalabra(palabras){
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

function dibujarHorca1(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        pincel.fillStyle = "darkblue";
        pincel.fillRect(anchoCanvas*0.1 , altoCanvas*0.9, anchoCanvas*0.8, 4.5);
        
    }else{
        console.log("No hay getContext")
    }
}

function dibujarHorca2(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        pincel.fillStyle = "darkblue";
        
        pincel.fillRect(anchoCanvas*0.3 , altoCanvas*0.1, 4.5, altoCanvas*0.8);
        
    }else{
        console.log("No hay getContext")
    }
}

function dibujarHorca3(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        pincel.fillStyle = "darkblue";
        
        pincel.fillRect(anchoCanvas*0.3 , altoCanvas*0.1, anchoCanvas*0.3, 4.5);
        
    }else{
        console.log("No hay getContext")
    }
}

function dibujarHorca4(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        pincel.fillStyle = "darkblue";
        
        pincel.fillRect(anchoCanvas*0.6 , altoCanvas*0.1, 4.5, altoCanvas*0.1);
    }else{
        console.log("No hay getContext")
    }
}

function dibujarCabeza(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        pincel.beginPath();
        pincel.strokeStyle = "darkblue";
        pincel.lineWidth=4.5;
        pincel.arc(anchoCanvas*0.6,altoCanvas*0.3,(altoCanvas*0.2/2),0,Math.PI*2,true);
        pincel.stroke();
    }
}

function dibujarTronco(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        pincel.fillStyle = "darkblue";
        pincel.fillRect(anchoCanvas*0.6 , altoCanvas*0.4, 4.5, altoCanvas*0.3+2);
    }
}

function dibujarPiernaIzquierda(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        pincel.beginPath();
        pincel.lineWidth=4.5;
        pincel.strokeStyle = "darkblue";
        pincel.moveTo(anchoCanvas*0.6+2, altoCanvas*0.7);
        pincel.lineTo(anchoCanvas*0.55, altoCanvas*0.8);
        pincel.stroke()
    }
}

function dibujarPiernaDerecha(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        pincel.beginPath();
        pincel.lineWidth=4.5;
        pincel.strokeStyle = "darkblue";
        pincel.moveTo(anchoCanvas*0.6+2, altoCanvas*0.7);
        pincel.lineTo(anchoCanvas*0.65, altoCanvas*0.8);
        pincel.stroke()
    }
}

function dibujarBrazoIzquierdo(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        pincel.beginPath();
        pincel.lineWidth=4.5;
        pincel.strokeStyle = "darkblue";
        pincel.moveTo(anchoCanvas*0.6+2, altoCanvas*0.5);
        pincel.lineTo(anchoCanvas*0.55, altoCanvas*0.6);
        pincel.stroke()
    }
}

function dibujarBrazoDerecho(){
    let canvas = document.querySelector("canvas");
    if(canvas.getContext){
        let pincel = canvas.getContext("2d");
        let anchoCanvas = canvas.width;
        let altoCanvas = canvas.height;
        pincel.beginPath();
        pincel.lineWidth=4.5;
        pincel.strokeStyle = "darkblue";
        pincel.moveTo(anchoCanvas*0.6+2, altoCanvas*0.5);
        pincel.lineTo(anchoCanvas*0.65, altoCanvas*0.6);
        pincel.stroke()
    }
}
function finDelJuego(boolean){
    let mensaje = document.querySelector("#mensaje");
    if(boolean){
        mensaje.style.color="green";
        mensaje.textContent="¡Felicidades, Ganaste!";
        juegoEnCurso=false;
    }else{
        mensaje.style.color="red";
        mensaje.textContent="Fin del juego!";
        juegoEnCurso=false;
    }
}