let arrayRandom=[]
let numeroMaX=10;
condicionesIniciales();

function condicionesIniciales(){
    asignarD('h1',"JUEGO DEL NUMERO SECRETO");
    asignarD('p',`Digite un numero del 1 al ${numeroMaX}`);
    numeroRandom=numRandom();
    contador=1;
}

function verificarIntento(){
    let valorU=parseInt(document.getElementById("valorUsuario").value);
   
    if(valorU===numeroRandom){
        asignarD('p',`Acertaste el numero en : ${contador} ${contador==1? "vez":"veces"}`);
        document.querySelector("#reiniciar").removeAttribute('disabled');
    }else{  
        if(valorU>numeroRandom){
            asignarD('p',"El valor es menor");
        }else{
            asignarD('p',"El valor es mayor");
        }
        contador++;
    }
    limpiarCampo();
}

function asignarD(HTML,contenido){
    let elementHTML=document.querySelector(HTML);
    elementHTML.innerHTML=contenido;
}
function numRandom(){
    numeroRandom=Math.floor(Math.random()*numeroMaX)+1;
    console.log(`numeroRandom: ${numeroRandom}`);
    console.log(arrayRandom);
    if(arrayRandom.length==numeroMaX){
        asignarD("p","Ya se adignaron todos los valores")
    }else{
        if(arrayRandom.includes(numeroRandom)){
            return numRandom(); 
        }else{
            arrayRandom.push(numeroRandom);
            return numeroRandom;
        }
    
    }
}

function limpiarCampo(){
    document.querySelector("#valorUsuario").value="";
}


function reiniciarJuego(){
    //limpiar cajas
    limpiarCampo();
    //Indicar el mensaje de intervalo
    //Generar el numero aleatordio
    //Iniciar el numero de intentos 
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}
