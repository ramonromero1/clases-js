console.log("");
console.log("------------------Metodo Reduce-------------------");

/*
El metodo reduce en JavaScript se utiliza para reducir los elementos de un array a un solo valor.
Es una funcion que toma una funcion de reduccion y la aplica secuencialmente a cada elemento del array,
acumulando un resultado final.
El metodo reduce() nos permite obtener un unico valor tras iterar sobre todo el array
*/

const numeros = [1, 2, 3, 4, 5, 6];

const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
// Primer ciclo 0 + 1 = 1 el resultado de la suma es el valor que se va acumulando en el "acumulador"
// Segundo ciclo 1 + 2 = 3
// Tercer ciclo 3 + 3 = 6
// Cuarto ciclo 6 + 4 = 10
// Quinto ciclo 10 + 5 = 15
// Sexto ciclo 15 + 6 = 21

const carrito = [
    {
        nombre: "Camisa",
        precio: 200,
    },
    {
        nombre: "Pantalon",
        precio: 300,
    },
    {
        nombre: "Remera",
        precio: 333,
    },
];

const totalCarrito = carrito.reduce ((acumulador, producto) => acumulador + producto.precio, 0 )

  // 0 + 200 = 200
  // 200 + 300 = 500
  // 500 + 333 = 833
  
console.log(totalCarrito);


