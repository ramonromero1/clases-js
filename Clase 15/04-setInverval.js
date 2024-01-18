console.log("");
console.log("---------------------------- SetInterval ----------------------");

/*
Tiene la misma sintaxis que setTimeOut, pero la unidad de tiempo es un intervalo para la repeticion de la funcion asociada
Permite ejecutar de manera reiterativa tras los milisegundos indicados hasta que indiquemos su detencion o se cierra la aplicacion.
*/

//setInterval (() => {
//    console.log("Primera Prueba");
//}, 1000);

//setInterval(() =>{
//    console.log("Segunda Prueba");
//}, 2000);

console.log("");
console.log("--------------------------- clearInterval -----------------------");

let contador = 0

let interval = setInterval(() =>{
    contador ++ 
    console.log(` Contado :${contador}`);
    // Cortamos el proceso del intervalo
    if (contador >= 5) {
        clearInterval(interval);
        console.log("Termino el contador");
    }

}, 1000);



//setInterval (() =>{
//    window.location.reload()
//},2000); Reinicia la pagina


