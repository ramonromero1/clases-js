console.log("");
console.log("------------------------- Event Loop ------------------------");

/*
Muchas funciones asincronicas se ejecutan en un stack diferente. El Event Loop es la herramienta que permite la sincronizacion
entre nuestro call stack con estas tareas asincronicas que funcionan en un thread aparte.
Si el stack esta vacio, el event loop envia la primera funcion que este en la callback que al call stack y comienza a ejecutarse.
*/

console.log("Inicio del proceso");

const dos = () => {
    setTimeout(() => {
        console.log("dos");
    }, 0);
}

const uno = () => {
    setTimeout(() => {
        console.log("uno");
    },0);

    dos ();


    console.log("tres");
}

// Ejecutamos la funcion uno
uno();

console.log("Fin del proceso");