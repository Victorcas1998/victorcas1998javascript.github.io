
function ocultarPeliculas() {
    //Hacer desaparecer peliculas
    document.querySelectorAll(".pelicula").forEach((pelicula) => {
        pelicula.style.display = "None";
    });
}

//LLamamos a la funcion "ocultar peliculas"
document.querySelector("#boton-accion").addEventListener("click", () => {
    ocultarPeliculas();
    // Mostramos la seleccion
    document.querySelectorAll(".accion").forEach((pelicula) => {
        pelicula.style.display = "Block";
    })
});

document.querySelector("#boton-terror").addEventListener("click", () => {
    ocultarPeliculas();
    // Mostramos la seleccion
    document.querySelectorAll(".terror").forEach((pelicula) => {
        pelicula.style.display = "Block";
    })
});

document.querySelector("#boton-comedia").addEventListener("click", () => {
    ocultarPeliculas();
    // Mostramos la seleccion
    document.querySelectorAll(".comedia").forEach((pelicula) => {
        pelicula.style.display = "Block";
    })

});

document.querySelector("#boton-todas").addEventListener("click", () => {
    document.querySelectorAll(".pelicula").forEach((pelicula) => {
        pelicula.style.display = "Block";
    })
});
document.querySelector("#genero").addEventListener("change", () => {
    let peli = document.querySelector("#genero").value;
    ocultarPeliculas();
    document.querySelectorAll("."+peli).forEach((pelicula) => {
        pelicula.style.display = "Block";
    })
});
