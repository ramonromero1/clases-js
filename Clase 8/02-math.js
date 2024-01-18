console.log("");
console.log("------------------El objeto Math-------------------");

/*
JS, provee el objeto Math que funciona como un contenedor de herramientas y metodos para
realizar operaciones matematicas.
El objeto Math contiene una serie de metodos que nos permiten realizar algunas operaciones matematicas mas complejas
*/

console.log(Math);

console.log(Math.E);
console.log(Math.PI);

// MIN y Max
// Calcula el numero maximos de los enviados por parametros
console.log(Math.max(20, 40, 33, 50, -3, 34));

// Calcula el numero minimos de los enviados por parametros
console.log(Math.min(20, 40, 33, 50, -3, 34));

const numeros = [15, 23, 33, 56, 21, 34, 29];
console.log(...numeros); // Copia de los elementos del array

console.log(...numeros);
/*
Los ... es una operador de propagacion lo que hace es descomponer el array 
en sus elementos individuales
*/

console.log(Math.max(...numeros));
console.log(Math.min(...numeros));

// Ceil, Floor & Round

const pi = Math.pi

// CEIL: devuelve el entero mayor o igual mas proximo 
console.log(Math.ceil(pi));

// FLOOR: devuelve el entero mas cercano redondeando para abajo
console.log(Math.floor(pi));

// ROUND: retorna el valor de un numero redondeando al entero mas cercano si es por ejemplo 3.5 redondea para arriba
console.log(Math.round(pi));

// Square Root
// Retorna la raiz cuadrada de un numero, si le pasa un numero negativo devuelve NaN
console.log(Math.sqrt(9));
console.log(Math.sqrt(25));
console.log(Math.sqrt(10));
console.log(Math.sqrt(-2));

// Random
// El metodo Math.random() genera un numero pseudo-aleatorio entre 0 y 1, siendo el 0 limite inclusivo y 1 exclusivo

console.log(Math.random()); // Salta un numero entre el 0 y el 1

// Numeros aleatorios con rango deseado

// Numero aleatorio entre 0 y 10
console.log(Math.random() * 10);

// Numero entre 20 y 50
console.log(Math.random() * 30 + 20);
 // El 30 es el numero de rango de numeros que tiene y el 20 es el limite inferior
 // entonces a partir del numero 20 tiene un rango de 30 numeros para elegir

// Numeros entre 30 y 50
console.log(Math.random() * 20 + 30);


// Numeros entre 20 y 70
console.log(Math.random() * 30 + 40);

console.log("---------------------Del 1 al 10-------------------");

// Redondeamos numeros entre el 1 y el 10
console.log(Math.round( Math.random() *9 + 1 ) );


