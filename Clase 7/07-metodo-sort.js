console.log("");
console.log("--------------------Metodo Sort-------------------");

/*
El metodo sort en JS. se utiliza para ordenar los elementos de un array.
Por defecto, el metodo sort convierte los elementos del array a cadenas de texto y realiza las clasificacion
basada en los puntos de codigo Unicode de esos caracteres.
*/

// Ejemplo de como retornar un valor en un valor booleano en una comparacion de orden alfabetico

console.log("a" > "b");
console.log("Jose" > "Pedro");

const frutas = ["Manzana", "Banana", "Pera", "Frutilla"];
console.log(frutas.sort());

const numeros = [40, 1, 5, 200];

// Ordenamos de manera ascendente
numeros.sort((a,b) => a - b);
console.log(numeros);

// Ordenamos de manera descendente
numeros.sort((a,b) => b - a);
console.log(numeros);
