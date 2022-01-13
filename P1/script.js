document.addEventListener('DOMContentLoaded', function() {
    button.addEventListener("click", ocultarForm());

    function ocultarForm() {
        document.getElementById('formulario').style.display = 'none';
        document.getElementById('tablero').style.display = 'block';
    }

});