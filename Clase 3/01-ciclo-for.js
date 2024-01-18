console.log("");
console.log("------------------------Ciclo for---------------------");
// Estructura del ciclo for

for( let i = 0 ; i < 10; i++){ // El i++ equivale a i = i + 1
    console.log("Se imprime un ciclo");
    console.log(i);
} 

console.log("");
console.log("-----------Ciclo for tabla de Multiplicacion---------");
// Algoritmo para calcurar la tabla de multiplicar de un numero 

let numero = 2; 

for( let i = 1; i < 10; i++){
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

console.log("");
console.log("-------------------Ciclo for Turnos------------------");
// Algoritmo para dar turno del 1 al 3 a los nombres asignados

for( let i = 1; i <= 3; i++) {
    // En cada repeticion solicitamos un nombre
    let nombre = prompt ("Ingrese su nombre")
    console.log(`Turno N° ${i} Nombre: ${nombre}`); // Tambien se puede hacer con "alert"
}

console.log("");
console.log("-------------Ciclo For Numero ignorado---------------");
// Estructura del ciclo for con control de flujo
// Imprimir todos los numeros del 0 al 10 menos el numero ingresado

let numeroIgnorado = 3;
for( let i = 0; i <= 10; i++) {

    if ( i != numeroIgnorado ) { // if lo usamos como condicional 
        console.log(i); //Imprimi todos los numeros que sean diferentes a 3
    }
    
}

console.log("");
console.log("--------------Ciclo for Sentencia Break--------------");
// Sentencia Break
// La utilizamos para interrumpir el ciclo

/*
A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condicion el ciclo se interrumpa
Para eso se utiliza la sentencia break.
Al escribir esa linea dentro de un ciclo for, el mismo se interrumpira como si hubiera finalizado
*/

for( let i = 1; i <=10; i++){
    // Si la variable i es igual a 5 interrumpo el for
    if ( i == 5){ 
        console.log("Interrumpido");
        break;
    }
    
    console.log(i);

}

console.log("");
console.log("-----------Ciclo for Sentencia Continue--------------");
// Sentencia Continue
/*
A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condicion, el ciclo saltee
y siga con la proxima. Para eso se utiliza la sentencia continue.
*/

for( let i = 1; i <=10; i++){
    // Si la variable i es 5, no se interpreta la repeticion
    if ( i == 5){
        continue;
    }
    console.log(i);
}
