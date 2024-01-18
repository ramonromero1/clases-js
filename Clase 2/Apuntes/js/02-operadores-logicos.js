console.log("");
console.log("-----------------Operadores logicos---------------------");



/*
Operador logico: Los operadores logicos en Javascript son simbolos especiales que se utilizan para realizar operaciones logicas entre valores booleanos (verdaero o falso).
Estos operadores permiten combinar o comparar expresiones y determinar la verdad o falsedad de una declaracion compuesta
*/


let compararNumeros;
let compararTexto;

// Operador == "Es igual"
compararNumeros = 10 == 20;
// Backsticks ` ` 
console.log(`El resultado de 10 == 10 es: + ${compararNumero}`);

compararNumeros = 10 == 10;
console.log( `El resultado de 10 == 20 es: ${compararNumeros}`);

compararTextonumero = 10 == "10"; // Solo compara el valor y no el tipo de dato
console.log(`El resultado de 10 == "10" es: ${compararTextonumero}`);

//Operador === "Es estrictamente Igual"
compararTextonumero = 10 === "10"; // Compara el valor y el tipo de dato
console.log(`El resultado de 10 === "10" es: ${compararTextonumero}`);

//Operador != "Es distinto"
compararNumeros = 10 != 20;
console.log(`El resultado de 10 != 20 es: ${compararNumeros}`);

compararTextoNumero = 10 != "10";
console.log(`El resultado de 10 != "10" es: ${compararTextoNumero}`);

//Operador !== "Es estrictamente distinto"
compararTextoNumero = 10 !== "10";
console.log(`El resultado de 10 !== "10" es: ${comprarTextoNumero}`);

//Operador > Mayor
compararNumeros = 10 > 20;
console.log(`El resultado de 10 >20 es: ${comprarNumeros}`);

compararNumeros = 20 < 20;
console.log(`El resultado de 20 < 20 es: ${comprarNumeros}`);

//Operador <= Menor o igual
compararNumeros = 20 <= 20;
console.log(`El resultado de 20 <= 20 es: ${comprarNumeros}`);

//Operador >= Mayor o Igual
compararNumeros = 10 >= 20;
console.log(`El resultado de 10 >= 20 es: ${comprarNumeros}`);

compararNumeros = 20 >= 20;
console.log(`El resultado de 20 >= 20 es: ${comprarNumeros}`);


console.log("");
console.log("------------Operadores Logicos && and (y)---------------");

/*
El operador and "&&" se utiliza para evaluar dos expresiones booleanas y devuelve el "true" si ambas expresiones
son verdaeras. Si al menos una de las expresiones es falsa, el resultado sera "false".

                                       V && V = V
                                       F && V = F
                                       V && F = F
                                       F && F = F
*/

let resultado;
resultado = 10 > 20 && 10 !== 20; //false && true
console.log(`El resultado de 10 > 20 && 10 !== 20 es: ${resultado}`);

resultado = 10 < 20 && 10 !== 20;
console.log(`El resultado de 10 < 20 && 10 !== 20 es: ${resultado}`);


/*
El operador or "||" se utiliza para evaluar dos expresiones booleanas y devuelve "ture" si al menos una de las
expresiones es verdadera. Solo devuelve "false" si ambas expresiones son falsas.

                                       V || V = V
                                       F || V = V
                                       V || F = V
                                       F || F = F
*/

resultado = 10 < 20 || 10 !== 20; // false || true
console.log(`El resultado de 10 > 20 || 10 !== 20 es ${resultado}`);

resultado = 10 < 20 || 10 !== 20; // true || true
console.log(`El resultado de 10 > 20 || 10 !== 20 es ${resultado}`);

resultado = 10 > 20 || 10 === 20; // false || false 
console.log(`El resultado de 10 > 20 || 10 === 20 es ${resultado}`);


/*
El operador not "!" se utiliza para negar una expresion booleana, es decir cambia "true" a "false".
*/

let valor = true;
console.log(`La variable valor es ${valor}`);

console.log(`La variable valor es ${!valor}`); // niega la expresion, invierte el valor

let comparacion = // 10 == 10  // si no estuviera definido nos daria un error
console.log(!comparacion);


if (!comparacion && 10 == 10){  // if trabaja como false , cuando ponemos la condicion "!"" tiene una condicion true 
    console.log("Es true");
} else {
    console.log("Es false");
}


if (comparacion && 10 != 10){  // if trabaja como false , cuando ponemos la condicion "!"" tiene una condicion true 
    console.log("Es true");
} else {
    console.log("Es false");
}


if (!comparacion || 10 == 10){  // if trabaja como false , cuando ponemos la condicion "!"" tiene una condicion true 
    console.log("Es true");
} else {
    console.log("Es false");
}



/*
EJERCICIO
Realizar una aplicacion que pueda controlar el acceso a una montañana rusa, que controle la edad y la estatura
para poder ingresar a la atraccion, para ello debemos utilizar los siguientes datos:
- Edad del cliente. Usar parsenInt()
- Estatura del cliente. Usar parseFloat()
- Edad minima para ingresar 15 años
- Estatura minima para ingresar 1.55
Para resolver este problema debemos utilizar la estructura de control if ese if y operadores logicos
Casos posibles:
- La edad y la estatura se cumplen con los minimos requisitos o mas y puede ingresar.
- La edad cumple con los requisitos minimos, pero la estatura no, no puede ingresar
- la edad no cumple con los requisitos minimos, pero la estatura si, no puede ingresar
- Ni la edad ni la estatura cumplen con los requisitos minimos, no puede ingresar 
*/

