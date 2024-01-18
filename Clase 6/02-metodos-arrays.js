console.log("");
console.log("-------------------Metodos de Arrays---------------");

/*
En JavaScript, los metodos de array son funciones incorporadas que pueden ser utilizadas con arrays para realizar
diversas operaciones, como agregar o quitar elementos, filtrar elementos, mapear valores, etc.
Estos metodos facilitan la manipulacion y el trabajo con arrays.
*/

console.log("");
console.log("---------------Metodos unshitf y push--------------");

// Con estos metodos podemos agregar elementos a un array

let numeros = [2,3,4];

// Agregar un elemento en la primera posicion con el metodo unishift
numeros.unshift(1)
console.log(numeros);

// Agregar un elemento a la ultima posicion con le metodo push
numeros.push(5); // separando con , se puede agregar mas de un elemento
console.log(numeros);

console.log("");
console.log("-------------Metodos shift, pop y splice------------");
// Con estos metodos podemos quitar elementos de un array

// Quitar elementos en la primera posicion del array con el metodo shift
numeros.shift();
console.log(numeros);

// Quitar elementos en la ultima posicion del array con el metodo pop
numeros.pop();
console.log(numeros);

// Quitar un elemento de un array en cualquier posicion con el metodo splice
// Primer parametro desde que la posicion quieres eliminar, Segundo parametro cuantos elementos quieres eliminar desde la posicion
numeros.splice(1,1);
console.log(numeros);

let nombresMasculinos = ["Pepe", "Juan", "Pedro", "Ana", "Maria"];
let nombresFemeninos = ["Pepe", "Juan", "Pedro", "Ana", "Maria"];

nombresMasculinos.splice(3,2);
console.log(nombresMasculinos);

nombresFemeninos.slice(0,3);
console.log(nombresFemeninos);

console.log("");
console.log("-------------------Metodo Join---------------------");

/*
Mediante el metodo Join podemos generar un string con todos los elementos del array, separados por el valor
que pasamos por parametro
*/

console.log(nombresMasculinos.join(", "));
//console.log(nombresMasculinos.join(" "));
//console.log(nombresMasculinos.join("."));
//console.log(nombresMasculinos.join("/"));
//console.log(nombresMasculinos.join("*"));
//console.log(nombresMasculinos.join(","));
//console.log(nombresMasculinos.join(" | "));

console.log("");
console.log("-------------------Metodo concat------------------");

// Mediante el metodo concat podemos cambiar dos Arrays en un unico Array resultante

let nombresMasculinosYFemeninos =  nombresMasculinos.cancat(nombresFemeninos);
console.log(nombresMasculinosYFemeninos); 


console.log("");
console.log("---------------------Metodo Slice-----------------");

/*
El metodo slice devuelve una copia de una parte del Array dentro de un nuevo Array, empezando por el inicio
hasta el fin (fin no incluido). El Array original no se modificara.
*/

let nombes = ["Pepe", "Juan", "Ana", "Maria"];

let conAna = nombres.slice(2,3)
console.log(conAna);

let sinPepe = nombres.slice(1,4);
console.log(sinPepe);

console.log("");
console.log("-------------------Metodo Indexof------------------");

/*
El metodo indexOf() nos permite obtener el indice de un elemento en un array. Recibe por parametro el elemento que 
queremos buscar en el array y, en caso de existir, nos retorna su indice.
Si el elemento no existe nos retornara como valor: -1
*/

console.log(nombres.indexof("Pepe")); 
console.log(nombres.indexof("Ana"));
console.log(nombres.indexof("Jose")); // -1 porque no existe
console.log(nombres.indexof("pepe")); // -1 porque no respeta las mayusculas ni minisculas


console.log("");
console.log("------------------Metodo include------------------");

/*
Similar al anterior, el metodo include me permite saber si un elemento que recibo por parametro existe o no dentro
de un array, retornando un valor booleano en caso afirmativo o negativo:
*/

console.log(nombres.includes("Pepe"));
console.log(nombres.includes("Juan"));
console.log(nombres.includes("Julieta"));
console.log(nombres.includes("maria"));
console.log(nombres.includes("2")); // Si el 2 estuviera en el array daria true


console.log("");
console.log("------------------Metodo reverse-------------------");

/*
Como su nombre lo indica, el metodo reverse () invierte el orden de los elemtos dentro de un array,
modifica el array original
*/

console.log(nombres);
nombres.reverse();
console.log(nombres);
