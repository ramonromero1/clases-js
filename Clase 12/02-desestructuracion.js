console.log("");
console.log("------------------- Destructuracion de objetos-----------------");

// Es una tecnica que nos permite declarar variables donde guardar propiedades de un objeto de forma rapida y directa

const persona = {
    nombre: "Jose",
    edad : 22
};

//let nombre = persona.nombre;
//console.log(nombre);
//let edad = persona.edad;
//console.log(edad);

const {nombre, edad} = persona // Cuando abrimos las { } queremos decir que vamos a destructurar un objeto
console.log(nombre);
console.log(edad);

console.log(persona);

// Desestructurando objetos dentro de objetos

const producto = {
    titulo: "Telefono Celular",
    marca:"Samsung",
    modelo: "S22",
    caracteristicas: {
        pantalla: "6,7",
        color: "Azul"
    }
}

console.log(producto);

const {titulo, marca, modelo, caracteristicas : { pantalla, color}} = producto // Cuando se abre la segunda { } ya la primera no toma "caracteristicas"
console.log(titulo);
console.log(modelo);
console.log(marca);
console.log(pantalla);
console.log(color);

console.log(producto);


console.log("");
console.log("---------------------- Destructuracion Alias --------------------");

const persona2 = {
    nombre: "Miguel",
    edad: 45
};

const {nombre: nombreP2, edad:edadP2 } = persona2; // No puede haber 2 variables iguales entonces con los : se le asigna un alias asi no hay error
console.log(nombreP2);
console.log(edadP2);


console.log("");
console.log("------------- Destructuracion en parametros funciones ------------");

const mostarDatos = (persona) => {
    console.log(`El nombre es ${persona.nombre}`);
    console.log(`La edad es ${persona.edad}`);
}

mostarDatos(persona);

const mostarDatos2 = ({nombre, edad} ) => {
    console.log(`El nombre es ${nombre}`);
    console.log(`La edad es ${edad}`);
}

const mostarDatos3 = ({nombre, edad} ) => {
    console.log(nombre ?? "No ingreso nombre");
    console.log(edad ?? "No ingreso edad");
}

mostarDatos2(persona2);

let persona3 = {
    name: "Ana",
    age: 25
}

mostarDatos2(persona3); // Va a dar undefined porque las propiedades no son las mismas

mostarDatos3 (persona3)


console.log("");
console.log("--------------------- Destructuracion de Arrays ------------------");

const nombres = ["Juan" , "Julieta" , "Carlos" , "Mariela"];

const [ nombre1, nombreJulieta , nombre3, nombre4] = nombres;
console.log(nombre1);
console.log(nombreJulieta);
console.log(nombre3);
console.log(nombre4);

const [ , n2, , n4] = nombres;
console.log(n2);
console.log(n4);

const nombres2 = ["Juan" , "Julieta" , "Carlos" , "Mariela", ["Pepe" , "Miguel"]];

const [,,,,pepeYmiguel] = nombres2;
console.log(pepeYmiguel);

const [, miguel] = pepeYmiguel;
console.log(miguel);

