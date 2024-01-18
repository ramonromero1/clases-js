console.log("");
console.log("------------------------Switch---------------------");

/* 
En JavaScrip, la sentencia switch se utiliza para tomar decisiones basadas en el valor de una expresion.
Es una alternativa a utilizar multiples sentencias if-else cuando tienen multiples condiciones de manera mas odenada.
*/

let diaDeLaSemana = 3;

switch (diaDeLaSemana) { // Condicion
    case 1: // En caso de que el valor de la variable diaDeLaSemana sea 1 se ejecuta el console.log
    console.log("Lunes");
    break;
    case 2:
        console.log("Martes");
        break; 
        default: // Si el valor no coincide se ejecuta el console.log, funciona como el else
            console.log("Valor no valido");
}

// EJEMPLO DE COMBINAR UN SWITCH CON UN CICLO WHILE

let encendido = true;

while (encendido) {
    // Mostrar un mensaje de opciones al usuario
    let opcion = parseInt (prompt("Selecciona una opcion: \n1. Saludar\n2. Despedir\n3. Salir"));

    // Evaluar la opcion seleccionada usando un switch
    switch (opcion) {
        case 1:
            alert ("HOLA!");
            break;
        case 2:
            alert ("Hasta luego!");
            break;
        case 3:
            encendido = false; // Salir del bucle while
            break;
        default:
            alert("Opcion invalida. Por favor, ingrese una opcion valida.");
            break;   
    }
}
alert ("Gracias por venir lo esperamos pronto")