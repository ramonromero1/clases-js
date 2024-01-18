console.log("");
console.log("---------Modificacion del Dom innerText-----------");

/*
La propiedad innerText de un nodo nos permite modificar su nodo de texto. Es decir, acceder y/o modificar
el contenido textual de algun elemento del dom
*/

let valor = 1;


const parrafo = document.querySelector ("parrafo");
console.log(parrafo);
console.log(parrafo.innerText);

// Modificamos el parrafo
parrafo.innerText = "Parrafo modificado desde JavaSript";

/*
if (valor == 1) {
    parrafo.innerText = "Parrafo modificado desde Javasript valor 1";
} else {
    parrafo.innerText = "Parrafo modificado desde Javascript valor no es 1";
}
*/

const subTitulo = document.querySelector ("#subTitulo");
subTitulo.innerText = "Nuevo Subtitulo"

console.log("");
console.log("----------Modificacion del DOM innerHTML----------");

/* 
innerHTML permite definir el codigo HTML interno del elemento seleccionado.
El navegador lo interpreta como codigo HTML y no como contenido de texto, permitiendo desde un string crear
una nueva estructura de etiquetas y contenido.
*/

subTitulo.innerHTML = "<h4>DOM Modificado con un h4<h4>";

const contenedor2 = document.querySelector("#contenedor2");

contenedor2.innerHTML = `
<h3> Titulo del contenedor 2 </h3>
<p> Parrafo del contendor </p>
`;

console.log("");
console.log("------------Modificacion del DOM ClassName---------");

/*
A traves de la propiedad className de algun nodo seleccionado podemos acceder al atributo class del mismo y 
definir cuales van a ser sus clases
*/

subTitulo.className = "subTitulo_color";


console.log("");
console.log("---------Modificacion del DOM createElemnt--------");

/*
Para crear elementos se utiliza la funcion document.createElement(), y se debe iniciar el nombre de 
etiqueta HTML que representara ese elemento.
*/

// Creamos un nuevo contenedor con la etiqueta div
const contenedor3 = document.createElement ("div");
console.log(contenedor3);


// Creamos un subtitulo para el contendor3 con una etiqueta h3
const tituloContenedor3 = document.createElement ("h3");
subtituloContenedor3.innerText = "Titulo del contenedor 3";

const parrafoContenedor3 = document.createElement ("p");
parrafo.innerText = "Texto parrafo contenedor 3";


console.log("");
console.log("------------Modificacion del DOM append------------");

// El metodo append() se utiliza para agregar uno o varios elementos al final de un elemento padre

const container = document.querySelector(".container");
container.append (contenedor3);

contenedor3.appendChild (tituloContenedor3);
contenedor3.appendChild (parrafoContenedor3);

