// sessionStorage

/*
La informacion almacenada en sessionStorage se almacena en el navegador hasta que el usuario cierra la ventana.
Solo existe dentro de la pestaña actual del navegador. Otra pestaña con la misma pagina tendra otro sessionStorage distinto.
*/

// Metodo -> sessionStorage.setItem (clave,valor)
// Clave =  nombre del elemento
// Valor = contenido del elemento


// Guardar datos en el sessionStorage
sessionStorage.setItem("email" , "lazaotz@gmail.com");


console.log("");
console.log("----------------SessionStorage getItem----------------");

// Recuperar informacion del sessionStorage

let email = sessionStorage.getItem ("email");
console.log(email);
console.log(sessionStorage);
console.log(sessionStorage.key[0]);

