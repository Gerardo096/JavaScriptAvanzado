var j1;
var j2;
var turno = 0;
var tematica;
var jugando = true;

window.addEventListener('load', (event) => {

    document.getElementById("boton").addEventListener('click', ocultarForm, false);


});

//Primero vamos a ocultar el div donde se encuentra el formulario y mostraremos el div donde se encuentra el tablero de juego
function ocultarForm(event) {
    j1 = document.getElementById("nombre1").value;
    j2 = document.getElementById("nombre2").value;
    tematica = document.getElementById("tematica").value;

    event.preventDefault();
    if (document.getElementById("nombre1").value == "" || document.getElementById("nombre2").value == "") {
        document.getElementById("error").innerHTML = "RELLENE TODOS LOS CAMPOS";
    } else {
        document.getElementById('formulario').style.display = 'none';

        document.getElementById('tablero').style.display = 'block';

        document.getElementById("jugador1").innerHTML = "Jugador 1: " + j1;
        document.getElementById("jugador2").innerHTML = "Jugador 2: " + j2;

    }
    if (jugando == true) {
        var img1 = document.getElementById("img1")
        img1.addEventListener("click", function() {

            comprobarCasilla(img1);
        });
        var img2 = document.getElementById("img2")
        img2.addEventListener("click", function() {

            comprobarCasilla(img2);
        });
        var img3 = document.getElementById("img3")
        img3.addEventListener("click", function() {

            comprobarCasilla(img3);
        });
        var img4 = document.getElementById("img4")
        img4.addEventListener("click", function() {

            comprobarCasilla(img4);
        });
        var img5 = document.getElementById("img5")
        img5.addEventListener("click", function() {

            comprobarCasilla(img5);
        });
        var img6 = document.getElementById("img6")
        img6.addEventListener("click", function() {

            comprobarCasilla(img6);
        });
        var img7 = document.getElementById("img7")
        img7.addEventListener("click", function() {

            comprobarCasilla(img7);
        });
        var img8 = document.getElementById("img8")
        img8.addEventListener("click", function() {

            comprobarCasilla(img8);
        });
        var img9 = document.getElementById("img9")
        img9.addEventListener("click", function() {

            comprobarCasilla(img9);
        });
    } else {

        document.getElementById("acabado").innerHTML = "El juego ha terminado";

    }

}

function comprobarCasilla(img) {
    //No he conseguido hacer que el empate salte en el ultimo click por lo que hay que dar 1 click mas T_T
    if (jugando == true && turno < 9) {
        usada = img.className;
        if (usada != "blanco") {
            document.getElementById("usada").innerHTML = "Esta casilla ya está usada";
        } else {
            document.getElementById("usada").innerHTML = "";
            jugar(img.id);
        }
    } else {
        if (jugando == true) {
            document.getElementById("ganador").innerHTML = "EMPATE!!";
        } else {
            if (turno % 2 == 0) {
                document.getElementById("ganador").innerHTML = "El ganador es: " + j1;

            } else {
                document.getElementById("ganador").innerHTML = "El ganador es: " + j2;
            }
        }
    }
}

function jugar(imgid) {

    var newimg = document.getElementById(imgid);

    if (turno % 2 == 0) {
        if (tematica == "clasico") {
            newimg.src = "images/equis.png";
        } else {
            newimg.src = "images/seviya.png";
        }
        newimg.className = "j1";
    } else {
        if (tematica == "clasico") {
            newimg.src = "images/circulo.png";
        } else {
            newimg.src = "images/vety.png";
        }
        newimg.className = "j2";
    }
    ganador();



}

function ganador() {
    var img1 = document.getElementById("img1").className;
    var img2 = document.getElementById("img2").className;
    var img3 = document.getElementById("img3").className;
    var img4 = document.getElementById("img4").className;
    var img5 = document.getElementById("img5").className;
    var img6 = document.getElementById("img6").className;
    var img7 = document.getElementById("img7").className;
    var img8 = document.getElementById("img8").className;
    var img9 = document.getElementById("img9").className;



    if (img1 != "blanco" && img1 == img2 && img1 == img3) {
        jugando = false;
    } else if (img1 != "blanco" && img1 == img4 && img1 == img7) {
        jugando = false;
    } else if (img1 != "blanco" && img1 == img5 && img1 == img9) {
        jugando = false;
    } else if (img2 != "blanco" && img2 == img5 && img2 == img8) {
        jugando = false;
    } else if (img3 != "blanco" && img3 == img6 && img3 == img6) {
        jugando = false;
    } else if (img3 != "blanco" && img3 == img5 && img3 == img7) {
        jugando = false;
    } else if (img4 != "blanco" && img4 == img5 && img4 == img6) {
        jugando = false;
    } else if (img7 != "blanco" && img7 == img8 && img7 == img9) {
        jugando = false;
    } else {
        turno++;
    }

}