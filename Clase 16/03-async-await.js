console.log("");
console.log("------------------- Async - Await -------------------");

/*
async y await son caracteristicas introducidas en ECMAScript 2017 (tambien conocido como ECMASCRIPT 8 o ES8) 
que facilitan el manejo de las promesas en JavaScript, haciendo el codigo asincronico mas limpio y facil de entender.
- Una funcion que tiene la palabra clave async antes de su declaracion se considera una "funcion asincronica".
Las funciones asincronas simpre devuelven una promesa.

- El operador await solo se puede usar dentro de una funcion asincrona. Se utiliza para esperar la resolucion de una promesa.
Mientras se espera, la ejecucion de la funcion asincrona se detendra, permitiendo que otras tareas se ejecuten en el
hilo principal del programa
*/


// Formato tradicional

//let products = [];

//fetch ("/data/productos.json")
//    .then (resp => resp.json)
//    .then (data => {
//        products = [...data];
//        console.log(products);
//    })


// Formato moderno con async y await 

const obtenerProductos = async () => { // Indica que esta funcion es asincrona y devuelve una promesa
try{ // Equivale al then
    const resp = await fetch ("/data/productos.json");
    const data = await resp.json();

    products = [...data];

    console.log(data);
} catch (error) { // Equivale al catch
    console.log(error);
}
}

obtenerProductos();