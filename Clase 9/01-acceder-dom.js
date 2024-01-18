console.log("");
console.log("-------------------Acceso al DOM------------------");

// Acceso al DOM con document

console.log(document);
console.log(document.head);
console.log(document.body);

console.log("");
console.log("--------------Acceso a los nodos por id------------");

// getElementById

/*
El metodo getElementById() sirve para acceder a un elemento de la estructura HTML,
utilizando su atributo ID como identificacion.
En caso de no encontrar nos devuelve null

Los id son identificadores unicos no se deben respetir.
*/

let contenedor = document.getElementById("contenedor"); // Mismo nombre que el id

let parrafo = document.getElementById("parrafo"); // Mismo nombre que el id
console.log(parrafo);
console.log(parrafo.innerText); // Acceder al contenido de la etiqueta

console.log("");
console.log("-------Acceso a los nodos por clase de estilo-------");
// getElementByClassName()

/*
El metodo getElementByClassName() sirve para acceder a un conjunto de elementos de la estructura HTML,
utilizando su atributo class como identificacion. Se retornara un Array con todas las coincidencias:
*/

let paises = document.getElementsByClassName("paises");
console.log(paises);
console.log(paises[0]); // Acceder a la posicion 
console.log(paises[1]);
console.log(paises[2].innerText); // Acceder al texto

console.log("");
console.log("-------Acceso a los nodos por etiquetas HTML--------");

// getElementsByTagName

/*
El metodo getElementsByTagName() sirve para acceder a un conjunto de elementos en la estructura de HTML,
utilizando su nombre de etiqueta como identificacion. Esta opcion es la menos especifica de todas, 
ya que es muy probable que las etiquetas se repitan en el codigo HTML
*/

let paises2 = document.getElementsByTagName ("li");
console.log(paises2);
console.log(paises2[0]);
console.log(paises2[1]);
console.log(paises2[2].innerText);

let div = document.getElementsByTagName("div")

// Trae todas las etiquetas sin importar su ubicacion 

console.log("");
console.log("---------Acceso a los nodos con selector-----------");
// querySelector()

/*
El metodo querySelector() devuelve el primer elemento que coincide con el selector proporcionado (iguales a los de css).
Si no se encuentra ningun elemento que coincida, se devuelve null.
*/

// Selectores de css
// Para etiquetas h2
// Para clases es .
// Para id es #

//Seleccionar un elemento por su etiqueta
let titulo = document.querySelector("h2");
console.log(titulo);

// Seleccionar un elemento por su id
let listaPaises = document.querySelector("#listapaises"); // # accede directamente a un id
console.log(listaPaises);

// Seleccionar un elemento por medio de su clase
let botonVolver = document.querySelector("botonvolver");
console.log(botonVolver);

console.log("");
console.log("------Acceso a los nodos con selector multiple-----");
//querySelectoAll()

/*
A diferencia de querySelector(), que solo devuelve el primer elemento que coincide, querySelectorAll(),
nos devuelve un listado de todos los elementos que coincidan en una Nodelist en formato Array
*/

let paises3 = document.querySelectorAll(".paises"); 
console.log(paises3);

paises3.forEach( pais => console.log(pais)); // Con el forEach se puede acceder a cada elemento
paises3.forEach( pais => console.log(pais.innerText)); // Acceder al texto con un forEach

paises3.forEach( pais => copia.push(pais.innerText));
console.log(copia);
