//NO UTILIZAR LAS SIGUIENTES PALABRAS
//break, case, catch, continue, default, let
//delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, y varias más








console.log("-----------------Entrada y Salida de datos ---------------------");
 //Entrada de datos
 // prompt () Todos los datos que recibimos por el prompt spn de tipo string (texto)

 // SIEMPRE EL TIPO DE DATOS QUE ALMACENA ES DE TIPO STRING (TEXTO)
 // Salida de dato console.log
 let nombre = prompt ("Ingrese su nombre");
 console.log("El nombre ingresado es: " + nombre);

 // Salida de datos alert()
alert("El nombre ingresado es: " + nombre);


// Como hacer para convertir un tipo de datos string a un tipo number
//Para ello vamos a utilizar el metodo parseInt()

let numero = parseInt (prompt ("Ingrese un numero") );
console.log("El numero ingresado es" + " " + numero);

// Como hacer para convertir un tipo de datos string a un tipo number decimal
//Para ello vamos a utilizar parseFloat

numero = parseFloat ( prompt ("Ingrese un numero"));
console.log("El numero ingresado es " + " " + numero);
