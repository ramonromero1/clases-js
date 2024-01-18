console.log("");
console.log("-------------------------- Fetch ------------------------");

/*
JavaScript nos ofrece el metodo fetch() para hacer peticiones HTTP o algun servicio externo. Como estas peticiones son asincronicas,
convenientemente el metodo fetch() trabaja con promesas.
El metodo recibe un primer parametro que es la URL a la cual hacer peticion, y un segundo parametro opcional de configuracion.
*/

// Metodo GET

console.log(fetch('https://jsonplaceholder.typicode.com/posts/1'));

//fetch('https://jsonplaceholder.typicode.com/posts/1')
   // .then (resp => console.log(resp)) // obtenemos un objeto tipo Response

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then( resp => resp.json() ) // Usamos el metodo .json() para extraer la informacion de la respuesta, el mismo devuelve la informacion
    .then( data => console.log(data) )


// Consumiendo la api de Rick and Morty

fetch("https://rickandmortyapi.com/api/character")
    .then ( resp => resp.json())
    .then ( data => mostrarPersonajes(data.result))

let contenedor = document.querySelector("#contenedor");

const mostrarPersonajes = (personajes) => {
    personajes.forEach( personaje => {
        
        let div = document.createElement ("div");
        div.className = "clase1"
        div.innerHTML = `
        <p> Nombre: ${personaje.name} <p>
        <img class = "w-25" src= ${personaje.image}>
        `

        contenedor.appendChild (div);

    });
}