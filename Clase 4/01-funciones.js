console.log("");
console.log("-----------------------Funciones---------------------");

/*
Las funciones en JavaScript son bloques de codigo que se pueden definir una vez y luego reutilizar
en multiples partes de un programa
*/

// Declaracion de una funcion

function saludar () {
    console.log("Hola a todos"); // Puede tener mas de una linea
}

// Llamar la funcion

saludar(); // Asi se ejecuta el codigo que esta dentro de la funcion y se puede llamar mas de una vez
//saludar();
//saludar();

function solicitarNombre(){
    let nombre = prompt("Ingrese el nombre");
    console.log(`El nombre ingresado es ${nombre}`);
}

solicitarNombre() // la podemos llamar en cualquier parte del codigo
solicitarNombre()

console.log("");
console.log("--------------Funciones con Parametros---------------");

/*
Los parametros en las funciones de JavaScript son variables que se utilizan para recibir datos de entrada cuando se
llama a la funcion. Los parametros son definidos en la declaracion de la funcion y actuan como marcadores de posicion
para los valores que se pasaran cuando se invoque la funcion.
*/

function saludarPersona (nombre) {
    console.log(`Hola ${nombre}`);
}

//saludarPersona ("Matias");
//saludarPersona ("Pepe");
//saludarPersona ("Profe");

//let nombreUsuario =  prompt ("Ingrese el nombre de usuario")
//saludarPersona(nombreUsuario);

// Funciones con dos o mas parametros, la cantidad de parametros es infinita pero lo recomendable es que no supere los 3

function mensajeDosPalabras( palabra1, palabra2) { //Puede tener cualquier palabra , pero tiene que ser un parametro coherente
    console.log(`${palabra1} ${palabra2}`);
}
mensajeDosPalabras("Hola" , "Mundo"); //Pueden ser numeros y palabras.


function sumarDosNumeros (numero1, numero2) {
    console.log(`El resultado de la suma de los dos numeros es: ${numero1 + numero2}`);

}
 
sumarDosNumeros( 12, 20)
sumarDosNumeros( 15, 14)

// Re asignamos el valor de una variable dentro de una funcion

let resultadoRestaDosNumeros = 0 ;

function restarDosNumeros ( numero1, numero2) {
    resultadoRestaDosNumeros = numero1 - numero2;

    console.log(`El resultado de la resta de dos numeros es: ${resultadoRestaDosNumeros}`);
}

restarDosNumeros (40, 30);
restarDosNumeros (50, 50);

// Funcion que cambia el nombre

let nombre ="Juan";

function cambiarNombre ( nuevoNombre) {
    nombre = nuevoNombre; // Se cambia el valor de la variable atraves de la funcion

}
// Imprimimos el nombre de la variable con el valor original que es JUAN
console.log(`El nombre original es ${nombre}`);

// Cambiamos el valor de la variable dentro de la funcion llamando la funcion cambiarNombre
cambiarNombre ("Ramon");

// Imprimimos el valor de nombre luego de cambiarlo en la funcion cambiarNombre
console.log(`El nuevo nombre es ${nombre}`);

/*
function mostrarCabecera (titulo) {
    console.log("");
    console.log(`--------------${titulo}---------------`);
}

mostrarCabecera ("Prueba de funciones")
*/

console.log("");
console.log("-------------Funciones con Retorno------------------");

/* 
Los retornos de las funciones en JavaScript son valores que una funcion devuelve como resultado de su ejecucion.
Las funciones pueden realizar calculos, procesar datos o realizar cualquier tarea, y luego pueden retornar un valor
o un objeto que se puede utilizar en otros lugares del programa. Los retornos de las funciones son fundamentales
para que las funciones sean reutilizables y puedan comunicarse con otras partes del codigo.
*/

function sumar (num1 , num2){
    console.log(`Sumando ${num1} + ${num2}...`);
    //return num1 + num2;
    return sumar; // Tambien se puede retornar a la variable suma
    /*Todo lo que se encuentre debajo del return no se va a ejecutar porque al momento de llegar al return se sale de la funcion*/
}

//sumar (15 , 15); // Asi no sale el valor final

// Una de las maneras para poder ver el valor
console.log(sumar(15,15));

let resultadoSuma = sumar ( 20, 25); // Se utiliza la funcion sumar para almacenar un valor 
console.log(resultadoSuma);

let resultadoSuma2 = sumar ( 2, 25);
console.log(resultadoSuma);


// Return con texto
function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar("Ramon"));

let saludoARamon = saludar("Ramon");
console.log(saludoARamon);

// Calculadora funciones + switch

function calculadora (num1 , num2 , operacion) {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return 0;
    }
}

console.log(`El resultado de la suma en la calculadora es ${calculadora(10, 5, "+")}`);
console.log(`El resultado de la resta en la calculadora es ${calculadora(10, 5, "-")}`);
console.log(`El resultado de la multiplicacion en la calculadora es ${calculadora(10, 5, "*")}`);
console.log(`El resultado de la division en la calculadora es ${calculadora(10, 5, "/")}`);


let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese un numero"));
let operacion = prompt ("Ingrese la operacion");

console.log(calculadora(numero1, numero2, operacion));

