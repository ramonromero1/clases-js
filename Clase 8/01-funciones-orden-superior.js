console.log("");
console.log("------------Funciones de orden Superior------------");

/*
Son funciones que retornan una funcion, o recibe una funcion por parametro.
Este tipo de funciones nos permiten abstraernos sobre acciones y no solo valores.
*/

// Funciones que retornan una funcion

function mayorQue(numeroReferencia) {
    // Retornamos una funcion que retorna un valor booleano
    return numero => numero > numeroReferencia;
}

let mayorQueDiez = mayorQue (10);
// let mayorQueDiez = numero => numero > 10 (Esto es a lo que retorna esta funcion)

console.log(mayorQueDiez(16)); // 16 > 10
console.log(mayorQueDiez(8)); // 8 > 10

// Recibir funciones por parametro

let numeros = [1, 2, 3, 4, 5];

numeros.forEach( (numero) => console.log(numeros));
