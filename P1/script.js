function cambiarimg(pulsacion) {
    var bt = pulsacion.target;

}


//De esta forma detectamos cuando se pulsa en algun boton y lo manda en forma de array
//que vamos a recorrer con un for each, vamos a estar a la espera de un click para llamar a 
//la funcion que cambie la imagen segun si es el jugador 1 con una X o el jugador 2 con un O
document.querySelectorAll('button').forEach(boton => boton.addEventListener('click', cambiarimg));