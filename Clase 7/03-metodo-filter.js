console.log("");
console.log("---------------------Metodo Filter-----------------");

/*
El metodo filter () recibe, al igual que find(), una funcion comparadora por parametro, y retorna un nuevo array
con todos los elementos que cumplan esa condicion. Si no hay coincidencias , retorna un array vacio.
*/

const cursos =[
    {nombre: "JavaScript", precio: 15000},
    {nombre: "ReactJS", precio: 22000},
    {nombre: "AngularJS", precio: 21000},
    {nombre: "Desarrollo Web", precio: 16000},
];

const mayoresA17000 =  cursos.filter (curso => curso.precio > 17000);
console.log(mayoresA17000);

const menoresA17000 = cursos.filter( curso => curso.precio <17000);
console.log(menoresA17000);

// Eliminando un curso con el metodo filter

const sinAngular = curso.filter( curso => curso.nombre !== "AngularJS");
console.log(sinAngular);

//const sinAngular = curso.filter( curso => curso.nombre.tolowerCase() !== "AngularJS".tolowerCase());
//console.log(sinAngular);

