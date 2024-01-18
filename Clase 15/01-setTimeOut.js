console.log("");
console.log("------------------------- SetTimeOut ------------------------");

/*
Es una funcion que permite realizar acciones asincronicamente. La funcion recibe dos parametros:
Una funcion de callback y un valor numero que reprensenta milsegundos
*/

console.log("Inicio del proceso");

const mensaje = () => {
    console.log("Primer mensaje asincronico");
}

// Usamos la funcion setTimeOut para ejecutar la funcion mensaje luego de 3s

setTimeout( mensaje, 3000 );

// Usamos la funcion setTimeOut para ejecutar la funcion callbacck integrada luego de 3s

setTimeout( () => {
    console.log("Segundo Proceso asincronico");
}, 5000 )

console.log("Fin del proceso");