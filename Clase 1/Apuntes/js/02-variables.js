//NO UTILIZAR LAS SIGUIENTES PALABRAS
//break, case, catch, continue, default, let
//delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, y varias más









console.log("-----------------INICIALIZAR VARIABLES-----------------");
// Tipos de variables var,let y const

// Declarar una variable
let apellido;
let telefono;
let anioNacimiento;

// Asignarle un valor
apellido= "Ortiz";
console.log("apellido");

telefono= 98219389;
console.log(telefono);

anioNacimiento=2000
console.log(anioNacimiento);

console.log("--------------Variables Inicializadas---------------");
//VARIABLES INICIALIZADAS
let edad=20;
let pais= "Argentina"
console.log(edad);
console.log(pais);



console.log("--------------------Variables var y let------------------------");
// Las variables let y var pueden recibir multiples asignaciones
// eso quiere decir que puede cambiar su valor muchas veces y su tipo de dato

var fruta="banana"; //tambien podria ser un let y se mostraria de la m misma forma
console.log(fruta);

fruta="pera";
console.log(fruta);

fruta=30;
console.log(fruta);

// No usar VAR porque mezcla el codigo es mejor usar LET

console.log("-------------CONSTANTES----------");
//const como su nombre lo indica no puede cambiar de valor, no puede ser re asignada

const saludo = "hola"
console.log(saludo); //no se puede poner dos valores a una constante

console.log("-----------CONCATENACION DE DATOS---------------");

let nombre = "Ramon";
let nombreCompleto = nombre + " " + apellido; // " " (espacio vacio)
console.log(nombreCompleto);

let lugarNacimiento = "Nacio en el pais" + " " + pais;
console.log(lugarNacimiento);

// Concatenar en el console.log()
console.log("lugar de nacimiento :", lugarNacimiento);

console.log("----------------Operaciones matematicas------------");

let numero1 =5;
let numero2 =10; //si agregamos comillas en el numero los juntaria a los dos pero sin sumarlos

let resultadoSuma= numero1 + numero2;
//console.log("El resultado de la suma es" + " " + resultadoSuma);

let resultadoResta= numero1 - numero2;
// console.log("El resultado de la resta es" + "" + resultadoResta);

let resultadoMultiplicacion= numero1 * numero2;
//console.log("El resultado de la multiplicacion es" + " " + resultadoMultiplicacion);

let resultadoDivision = numero1 / numero2;
//console.log("El resultado de la division es" +" " + resultadoDivision);

// SE PUEDE CAMBIAR DE LUGAR LOS NUMEROS, SUMAR LOS MISMOS NUMEROS, USAR VARIAS OPERACIONES, ETC






