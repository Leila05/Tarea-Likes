document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".boton");
    const parrafos = document.querySelectorAll(".num");

    botones.forEach((boton, index) => {
        boton.addEventListener("click", function() {
            let valorActual = parseInt(parrafos[index].textContent);
            valorActual++;
            parrafos[index].textContent = valorActual;
        });
    });
});
