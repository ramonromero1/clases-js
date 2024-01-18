//NO UTILIZAR LAS SIGUIENTES PALABRAS
//break, case, catch, continue, default, let
//delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, y varias más



console.log("");
console.log("-------------Valores booleanos true o false-------------");
// Valores booleanos de verdadero o falso

let verdadero = true;
let falso = false;
console.log(verdadero);
console.log(falso);


console.log("");
console.log("-----------------Uso de la estructura IF----------------");
 
//Cuando la condicion se cumple
if (verdadero) { //si la condicion es verdadera
 console.log("se cumple la condicion");
}

//Cuando la condicion no se cumple
if (falso) {
    console.log("se cumple la condicion");
}

console.log("");
console.log("--------------Operadores de Comparacion-----------------");
//Cuando operamos dos valores a traves de un operador de comparacion, esta operacion siempre se resuelve en true o false 
// Operadores de comparacion- Operador de equivalencia==

let num1 =10;
let num2 =20;

console.log( num1 == num2 );

// Se podria hacer sin variables
console.log(20 == 20);

// Con texto
console.log("Juan" == "Juan");
// Cuidado es sencible a las mayusculas y minusculas
console.log("Juan" == "juan");


console.log("");
console.log("------Operadores de comparacion con condicional IF------");

if( num1 == num2) {
    console.log("Los numeros son iguales");
}



console.log("");
console.log("--------------------Estructura IF else-----------------");
/* la estructura IF nos permite ejecutar algo en el caso que la condicion se cumpla, pero tambien existe la posibilidad de ejecutar algo en el caso de que la condicion no se cumpla,
teniendo dos alternativas para la condicion
*/

//let password = "hola";
//let contrasenia = prompt ("Ingrese su contraseña")

//if (password == contrasenia) {
    // Si se cumple esta condicion ejecutamos el codigo
//    console.log("Usted tiene acceso");
// } else {
    // En caso que no se cumpla la condicion se ejecuta este codigo
//    console.log("Error de contraseña");
// }

//if (10 == 10) {
//    console.log("Los numeros son iguales");
// } else {
//    console.log("Los numeros no son iguales");
//}

//let nombre = "Juan";
//let nombreUsuario = prompt ("Ingrese su nombre");

//if ( nombre == nombreUsuario) {
//    console.log("Bienvenido " + nombre);
//} else{
//    console.log("Usuario incorrercto");
//}

//console.log("");
//console.log("---------------Estructura if else if-------------------");

/* Con la estructura de control if else if, podemos anidar varias condiciones relacionadas y tomar diferentes acciones
de acuerdo a cada caso, si no se cumple niguna colocamos un else al final que determine la accion en caso de que no 
se cumpla ninguna de las condiciones
*/

//Operador de comparacion > < (Mayor que y Menor que)

let precio = 20;


if (precio <20) {

    console.log("El precio es menor a 20");

}else if (precio < 50) {

    console.log("El precio es menor a 50");

} else if (precio <100) {

    console.log("El precio es menor a 100");

}else {

    console.log("El precio es mayo a 100");

}

