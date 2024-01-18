console.log("");
console.log("----------------------Metodo find-----------------");

/*
El metodo find() recibe una funcion de comparacion por parametro. Captura el elemento que se esta recorriendo 
y retorna true o false segun la comparacion ejecutada. El metodo retorna el primer elemento que cumpla con esa condicion
*/

const cursos =[
    {nombre: "JavaScript", precio: 15000},
    {nombre: "ReactJS", precio: 22000},
    {nombre: "AngularJS", precio: 21000},
    {nombre: "Desarrollo Web", precio: 16000},
];
console.log(cursos);

// Caso en el que se encuentre una coincidencia retorna el primer elemento que coincida con la condicion
let cursoReact = curso.find (curso => curso.nombre == "ReactJs"); 
console.log(cursoReact);

// Caso en que no se encuentra coincidencia devuelve undefined
let cursoJs = curso.find (curso => curso.nombre === "pepe");
console.log(cursoJs);

// Utilizando un prompt
const cursoBuscado = prompt ("Ingrese el nombre del curso a buscar");

// Reducir el error de ingreso del usuario transformado en minusculas el condicional
const cursoEncontrado = cursos.find( curso => curso.nombre.toLocaleLowerCase() === cursoBuscado.toLocaleLowerCase());
console.log(cursoEncontrado);

if (cursoEncontrado) {
    console.log(cursoEncontrado);
} else {
    console.log(`No se encontro el curso ${cursoBuscado}`);
}

