console.log("");
console.log("--------------- Fetch rutas relativas --------------");

/*
Si la URL utilizada no contiene el prefijo 'https:', la ruta es relativa. Asi, podemos hacer una peticiion a algun archivo local
en formato json usando fetch
*/

let products = [];

fetch ("/data/productos.json")
    .then (resp => resp.json)
    .then (data => {
        products = [...data];
        console.log(products);
    })