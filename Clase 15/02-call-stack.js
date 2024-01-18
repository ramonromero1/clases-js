console.log("");
console.log("--------------------- Call Stack pila -------------------" );

/*
Es una lista donde se apilan distintas tareas a ejecutar por nuestro programa. JavaScript es un lenguaje single threaded,
o de un unico hilo, lo que significa que tiene un unico stack o pila de ejecucion. De ahi que la ejecucion es implicitamente 
sincronica
*/

console.log("Inicio del proceso");

const dos = () => {
    console.log("dos");
}

const uno = () => {
    console.log("uno");

    dos ();


    console.log("tres");
}

// Ejecutamos la funcion uno
uno();

console.log("Fin del proceso");