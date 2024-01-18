console.log("");
console.log("-------------------La clase Date-------------------");

/*
Seguramente en algun momento necesitamos manipular fechas dentro de los datos que manejamos.
Para esto, JS posee la clase Date diseñada para representar fechas
*/

console.log(new Date());

/*
La convencion con la que trabaja JS para construir fechas cuenta los meses a partir del 0 ( 0 = enero, 11 = diciembre)
y los dias a partir del 1 = lunes y 7 = domingo
*/

console.log(new Date(2020, 2, 15));

/*
El constructor de la clase Date nos permite crear objetos date con fechas diferentes.
Puede recibir parametros en el orden año, mes, dia, hora, minutos, segundos, milisegundos (todos tipo number)
*/

const casiNavidad = new Date( 2023, 11, 24, 23, 59, 59);
console.log(casiNavidad);

// Metodos que devuelven los valores singulares

const hoy = new Date(); 

// Obtenemos el mes entre 0 y 11 recordando que enero es 0 y diciembre 11
console.log(hoy.getMonth());

// Obtenemos el año en numeros ej: 2023
console.log(hoy.getFullYear());

// Obtenemos el dia enter 1 y 7 recordando que el lunes es 1 y el domingo 7
console.log(hoy,getDay());

// Mes, dia y año
console.log(hoy.toDateString);

// Mes, dia y año en formato y la hora
console.log(hoy.toLocaleString);

// Mes, dia y año en formato de fecha
console.log(hoy.toLocaleDateString);

// Hora
console.log(hoy.toTimeString);

// El metodo split() en JS se utiliza para dividir una cadena en un array de subcadenas segun un delimitador especificado

let mensaje = "Hola Mundo, este es otro mensaje";
console.log(mensaje.split(" "));
console.log(mensaje.split (","));

let horario = new Date().toTimeString().split(":")
console.log(horario[0]);

// Si es mayor al 17
if(parseInt(horario[0]) >= 17) {
    console.log("Happy Hour promociones 2x1");
} else {
    console.log("No hay promocion en este horario");
}

// Si es menor al 17
if(parseInt(horario[0]) <= 17) {
    console.log("Happy Hour promociones 2x1");
} else {
    console.log("No hay promocion en este horario");
}




