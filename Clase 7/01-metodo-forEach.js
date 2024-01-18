console.log("");
console.log("-------------------Metodo forEach-------------------");

/*
EL metodo forEach en JavaScript se utiliza para ejecutar una funcion proporcionada una vez por cada elemento en un array,
en orden. Es una forma de iterar sobre cada elemento de un array y aplicar una operacion especifica a cada uno de ellos.
*/

let numeros = [1,2,3,4,5];
console.log(numeros);

// Con funcion tradicional
numeros.forEach( function(elemento){
    console.log(elemento);

}) 

console.log("--------------------------------------------------");

// Con funcion flecha
numeros.forEach( numero => console.log(numero));

// Mismo resultado que el for of
for (let elemento of numeros) {
    console.log(elemento);
}

let nombres = ["Pepe", "Juan", "Pedro", "Ana", "Maria"];

let numeroNombre = 1;

nombres.forEach(nombre => {
    console.log(`${numeroNombre} - ${nombre}`);
    numeroNombre++;
});

