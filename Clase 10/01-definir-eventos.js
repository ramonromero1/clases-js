/*
Los eventos son la manera que tenemos en JavaScript de controlar las acciones de los usuarios,
y definir un comportamiento de la pagina o aplicacion cuando se produzcan.
Con JS es posible definir que sucede cuando se produce un evento, por ejemplo, 
cuando se realiza un clic en cierto elemento o se inserta un texto en determinado campo
*/

const boton = document.querySelector("#boton");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");

// ---------------- Definir eventos addEventListener-------------

/* 
Hay que entender que los eventos suceden constantemente en el navegador.
JS lo que nos permite hacer es escuchar eventos sobre elementos seleccionados.
Cuando escuchamos el evento esperamos, que se ejecute la funcion que definimos en respuesta.
A esta escucha se la denomina event listener.
*/

boton.addEventListener( "click", () => {
    console.log("Hago click en el boton");
} );

// --------------- Definir eventos con metodos on----------------

boton2.onclick = () => {
    console.log("Hago click con el on");
};


// ------- Definir eventos ejecutando funciones desde HTML-------

const eventoHtml = () => {
    console.log("Hago click desde el evento HTML");
}