console.log("");
console.log("--------------------Metodo Some-------------------");

/*
Es muy similar al metodo find, es un metodo de busqueda solo que en lugar de retornar el elemento, 
retorna un booleano true o false
*/

const cursos =[
    {nombre: "JavaScript", precio: 15000},
    {nombre: "ReactJS", precio: 22000},
    {nombre: "AngularJS", precio: 21000},
    {nombre: "Desarrollo Web", precio: 16000},
];

console.log(cursos.some((curso) => curso.nombre === "JavaScript"));
console.log(cursos.some((curso)=> curso.nombre === "Backend")); // False