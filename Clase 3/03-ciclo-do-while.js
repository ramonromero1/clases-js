console.log("");
console.log("------------------Ciclo Do While-------------------");

/*
La estructura do while permite crear bucles que se ejecutan una o mas veces, dependiendo de la condicion
A diferencia de while, garantiza que el bloque de codigo se interpreta al menos una vez,
porque la condicion se evalua al final.
*/

let nombre = "Juan";

/*
while (nombre != "Juan"){
    console.log("Hola Juan");   De esta manera no funciona
}
*/

do {
    console.log("Hola Juan"); // Primero se ejecuta el codigo y luego la condiicion

} while( nombre !="Juan");


let numero = 0;

do{
    numero = parseInt (prompt("Ingrese un numero mayor que 10"));


} while (numero <= 10);
console.log(`El numero ingresado es: ${numero}`);

