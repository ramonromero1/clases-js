console.log("");
console.log("------------------------Objetos---------------------");

/*
En JS, los objetos son estructuras que podemos definir para agrupar valores bajo un mismo criterio.
Podemos decir que un objeto es una coleccion de datos relacionados como una entidad. Se componen
de un listado de pares clave-valor, es decir contienen propiedades y valores agrupados
*/

const /*Puede ser un let tambien*/ persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    direccion: "Av. False 123",
    casado: true
    
};

console.log(persona);

const persona2 = {
    nombre: "Ana",
    apellido: "Diaz",
    edad: 24,
    direccion: "Av. Falsa 144",
    casado: false
}

console.log(persona2);

// Mostramos el valor de una propiedad del objeto
console.log(persona.nombre);
console.log(persona.direccion);
console.log(persona2.nombre);

// Otra forma de obtener el valor de una propiedad con corchetes
console.log(perosna["edad"]);
console.log(persona2["apellido"]);

// Rea asignar (cambiar) los valores a las propiedades
persona.edad = 31;
console.log(persona);

// persona = "Juan" Esto asi no se puede

// Concatenar valores de un objeto para mostrar

console.log(`El nombre completo es ${persona.nombre} ${persona.apellido}`);

// Agregar una propiedad a un objeto

persona.nacionalidad = "Argentina";
persona.apodo = "Maik";
console.log(persona);

console.log("");
console.log("---------Uso de objeto con condicional-------------");

const producto = {
    nombre: "Zapato",
    precio: 200,
    stock: 30,
};
if(producto.stock > 0) {
    console.log("Hay stock");
}else{
    console.log("No hay stock");
}

const productoRemera = {
    nombre: "Remera",
    precio: 200,
    stock: 0, 
}
// Constante para consultar stock

const cosultarStock = (stock) => {
    if (stock > 0) {
        console.log("Hay stock");
    } else{
        console.log("No hay stock");
    }
} 

consultarStock(producto.stock);
consultarStock(productoRemera.stock);



