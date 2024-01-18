console.log("");
console.log("-------------------Ciclo While----------------------");

/*
La estructura While permite crear bucles que se ejecutan cero o mas veces, dependiendo la condicion indicada.
El funcionamiento del bucle while se resume en: mientras se cumpla la condiicon indicada,
repite las instucciones incluidas dentro del bucle.
*/

// Algoritmo que solicita una entrada al usuario hasta que ingresa "ESC"

let entrada = prompt ("Ingresa un dato o ESC para salir");

while( entrada != "ESC") { // Mientras esta condicion de true va a ejecutarse el ciclo
    // Mientras se cumple esta condicion el ciclo se repite
    // Se ejecuta mientras el ciclo sigue funcionando
    alert (`El usuario ingreso: ${entrada}`);
    entrada = prompt ("Ingresa un dato o ESC para salir");
}
// Se utiliza un doble prompt para poder ejecutar un doble codigo y si el usuario no cumple la condicion sigue el ciclo
console.log("Fin del ciclo");

// Ejemplo de login 
// toLowerCase() es un metodo que tienen los string para convertir todo el texto en minuscula 
// toUpperCase() es un metodo que tienen los string para convertir todo el texto en mayuscula

let usuario = prompt ("Ingrese el nombre de usuario del administrador").toLowerCase();
//console.log(usuario);

let password = prompt ("Ingrese su contraseña").toUpperCase;
//console.log(password);

while( usuario != "admin" || password != "ADMIN123") {
    alert("Usuario o contrseña no validos");
    usuario = prompt ("Ingrese el nombre de usuario del administrador").toLowerCase();
    password = prompt ("Ingrese su contraseña").toUpperCase;
}
alert("Bienvenido al programa");


