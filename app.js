let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;
let intentosLimite = Math.floor(numeroMaximo/3);

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
        if(intentos <= intentosLimite){
        // El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p",`El número secreto es menor, te queda${(intentosLimite==1?'n':'')} ${intentosLimite-intentos} intento${(intentosLimite==1?'':'s')}`);
        }else{
            asignarTextoElemento("p",`El número secreto es mayor, te queda${(intentosLimite==1?'n':'')} ${intentosLimite-intentos} intento${(intentosLimite==1?'':'s')}`); 
        }
        intentos++;
        limpiarCaja();
    }
    else{
        alert('Lastima no acertaste el numero');
        reiniciarJuego();
    }
    }
    return;
}

function limpiarCaja(){
    let valorCaja=document.querySelector("#valorUsuario").value='';

}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta incluido en la lista
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    }else{

            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto")
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`)
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
