let numeroSecreto = 0;
let intentos=0;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
    
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos===1)?'Vez':'Veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        // El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor ");
        }else{
            asignarTextoElemento("p","El número secreto es mayor "); 
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja=document.querySelector("#valorUsuario").value='';

}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto")
    asignarTextoElemento("p","Indica un número del 1 al 10")
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de ibtervalo de numeros
    //Generar numero aleatorio
    //Inicializar el numero intentos
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();    
