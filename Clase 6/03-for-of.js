console.log("");
console.log("-----------------------For of---------------------");

/*
La sentencia for... of permite recorrer un array ejecutando un bloque de codigo por cada elemento del objeto.
Este tipo de bucle simplifica la sintaxis y hace que el codigo sea mas legible cuando se trabaja con iterables.
No es necesario manejar indices o acceder a elementos mediante indices, como se hace en el bucle for tradicional.
*/

const productos = [
    {
        id: 1,
        nombre: "Zapato" // Cada objeto representa un elemento
    },
    {
        id: 2,
        nombre: "Remera"
    },
    {
        id: 3,
        nombre: "Camisa"
    }
]
console.log(productos);

for (let producto of productos) {
    console.log(producto);
    //console.log(producto.id);
    //console.log(producto.nombre);
}


