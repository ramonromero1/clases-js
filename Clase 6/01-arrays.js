console.log("");
console.log("-------------------------Arrays---------------------");

/*
En los arrays de JavaScript, puedes guardar  una amplia variedad de elementos, 
pueden ser arrays con un solo tipo de elemento, con distintos tipos de elementos incluso
un array puede contener otro array anidado
*/

// Array vacio
let array = [];
console.log(array);

// Array de numeros
let numeros = [1,2,3,4,5,6]; /*todo lo que este dentro del array y vaya con , es un elemento*/

// Array de stings
let nombres = ["Pepe", "Juan", "Ana","Maria"]; //siempre lo que es texto va entre ""
console.log(nombres);

// Array de booleanos
let booleanos = [true, false, true, true];
console.log(booleanos);

// Array de objetos
let personas = [
    {nombre: "Pepe", edad: 30},
    {nombre: "Juan", edad: 30},
]
console.log(personas);

// Array  mixto
let mix = [10, "Pepe", false, {nombre:"Ana",edad:24}];
console.log(mix);

// Array mixto con otro Array
let mix2 = [10, "Pepe", false, {nombre:"Ana",edad:24},["Pepe", "Juan", "Ana","Maria"]]; //el segundo array ocupa el lugar de un solo elemento
console.log(mix2);

console.log("");
console.log("---------------------Array de objetos---------------");

console.log(nombres[1]);
console.log(numeros[3]);
console.log(personas[2].nombre); //con el . se puede acceder a las propiedades de los objetos

// Uso de los elementos de un array
let suma = numeros [4] + mix [0];
console.log(suma);

console.log("");
console.log("---Acceso a elementos de un Array con un ciclo for--");
//let numeros = [1,2,3,4,5,6];

//for (let i =  0; i < 6; i++) {
//    console.log(numeros[i]);
    //console.log(numeros[0]); EJEMPLO primer ciclo
    //console.log(numeros[1]); EJEMPLO segundo ciclo
//}
 
// Propiedad length: nos permite obtener la longitud de elementos de un array

console.log(numeroslength);

for(let i = 0; i <numeros.length; i++) { //identifica la longitud de la raiz e imprime todos los elementos
    console.log(numeros[i]);
}

for(let i = 0; i <nombres.length; i++) { //identifica la longitud de la raiz e imprime todos los elementos
    console.log(nombres[i]);
}

