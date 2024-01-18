console.log("");
console.log("----------------Funciones Flecha------------------");
/*
Las funciones flecha (arrow functions) son una caracteristica introducida en ECMAScript 6 (tambien conocido como ES6)
que proporciona una sintaxis mas concisa para definir funciones en JavaScript.
*/
 
const saludo = () => { // Se almacena la variable en la funcion mediante una constante
    console.log("Hola desde la arrow function");
}
saludo();

// Funciones flecha con parametros

const suma = (num1 , num2) => {
    console.log(`El resultado de la suma es: ${num1 + num2}`);
}
suma (44, 6);

// Funciones flecha con retorno
const resta = (num1 , num2) => {
    return num1 - num2;
}
console.log(`El resultado de la resta es: ${resta (20, 5)}`);


// Funciones flecha con return implicito
const sumaDeDosNumeros = (num1, num2) => num1 + num2; 
console.log(sumaDeDosNumeros(20 , 30));

// Funciones flecha con un solo parametro, no necesitan escribir los parentesis

const saludar =  nombre => console.log(`Hola ${nombre}`);

saludar ("Ramon")

