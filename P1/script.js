window.addEventListener('load', (event) => {

    document.getElementById("boton1").addEventListener('click', ocultarForm, false);


});
//Primero vamos a ocultar el div donde se encuentra el formulario y mostraremos el div donde se encuentra el tablero de juego
function ocultarForm() {

    document.getElementById('formulario').style.display = 'none';

    document.getElementById('tablero').style.display = 'block';

    var img = document.getElementById("img1").addEventListener("click", function() {
        jugar(img, 0);
    });
    var img = document.getElementById("img2").addEventListener("click", function() {
        jugar(img, 1);
    });
    var img = document.getElementById("img3").addEventListener("click", function() {
        jugar(img, 2);
    });
    var img = document.getElementById("img4").addEventListener("click", function() {
        jugar(img, 3);
    });
    var img = document.getElementById("img5").addEventListener("click", function() {
        jugar(img, 4);
    });
    var img = document.getElementById("img6").addEventListener("click", function() {
        jugar(img, 5);
    });
    var img = document.getElementById("img7").addEventListener("click", function() {
        jugar(img, 6);
    });
    var img = document.getElementById("img8").addEventListener("click", function() {
        jugar(img, 7);
    });
    var img = document.getElementById("img9").addEventListener("click", function() {
        jugar(img, 8);
    });


}

function jugar(img, casilla) {
    alert("hola");

}