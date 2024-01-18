console.log("");
console.log("----------------------- Sugar Syntax------------------------");

/*
Es el nombre que se le da a los operadores avanzados que funcionan como simplificaciones
de tareas mas complejas.
*/

let numero = 10;

// Aumento de manera tradicional
numero = numero + 1;

console.log(numero);

// Aumento primera simplificacion 
numero += 1;

console.log(numero);

// Aumento simplificado de sugar syntax
numero++;
console.log(numero);

console.log("");
console.log("-------------------- Operador ternario ---------------------");

/*
Es una simplificacion de la estructura condicional if...else.
Es un condicional que consta si o si de tres partes:
1 - La condicion.
2 - Caso que se cumpla.
3 - Caso en que no se cumpla
*/

let edad = 12;

if(edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// Utilizando operador ternario
edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");


let resultado = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(resultado);

// Ejercicio

const producto = {
    nombre: "Remera",
    precio: 150
};

let precio;

if (producto.precio < 200) {
    precio = true;
} else { 
    precio = false;
}
console.log(precio);

// Forma reducida sugar
let precio2 = producto.precio < 200 ? true : false;
console.log(precio2);


// Operador ternario con dos condicionales
let cliente = {
    nombre: "Pepe",
    edad: 22,
    estatura: 1.4
}

let puedeEntrar = cliente.edad >= 18 && cliente.estatura >= 1.6 ? `El cliente ${cliente.nombre} puede ingresar` : "No puede ingresar";
console.log(puedeEntrar);

let numero2 = 10;
console.log(isNaN(numero2)); // Verifica si ingresaste un texto


console.log("");
console.log("---------------------- Operador And &&-------------------------");

// Es una reduccion de un condicional, pero trata de ejecutar (o retornar) algo solo si la condicion es verdadera 

let carrito = [1];

let carritoEstado = carrito.length === 0 && "El carrito esta vacio"; // Si no se cumple la condicion genera un false
console.log(carritoEstado);

console.log("");
console.log("---------------------- Operador or || -------------------------");

/* 
OR (||) es sintacticamente similar al anterior, con la diferencia que consta de dos 
operandos y no de una condicion explicita: operador1 || operador2
*/

// Tabla de evaluacion de valores Falsy
console.log(0 || "Falsy") // Falsy
console.log(40 || "Falsy"); // 40
console.log(null || "Falsy"); // Falsy
console.log(undefined || "Falsy"); // Falsy
console.log("Hola mundo" || "Falsy"); // Hola mundo
console.log("" || "Falsy"); // Falsy
console.log(NaN || "Falsy"); // Falsy
console.log(true || "Falsy"); // true
console.log(false || "Falsy");


// Ejercicio

const stock = 0  || "No hay stock";  // Nos devuelve no hay stock
console.log(stock);

//const stock = -1  || "No hay stock";
//console.log(stock); Nos devuelve -1

const usuario = null || "El usuario no existe"
console.log(usuario);


// CON JSON
let tareas = JSON.parse(localStorage.getItem("tareas"));
console.log(tareas);

//let carritoCompras = JSON.parse(localStorage.getItem("carrito"));
//console.log(carritoCompras);

//if(carritoCompras === null) {
//    carritoCompras = [];
//} 
//console.log(carritoCompras); // Podemos evitar que cuando se inicie la aplicacion no se agregue informacion incorrecta al carrito



//carritoCompras.push ("producto");
//console.log(carritoCompras);

let productos = ["producto 1","producto 2"]
localStorage.setItem("carrito" , JSON.stringify(productos));

let carritoCompras = JSON.parse(localStorage.getItem("carrrito")) || [];
console.log(carritoCompras);


console.log("");
console.log("---------------------- Operador Nullish ?? ----------------------");

/*
Este Operador (??) funciona igual que el Operador OR (||), con la diferencia que admite mas valores como `verdaderos`
En este caso, solo obtenemos nullish en dos casos : null y undefined
*/

console.log(0 ?? "Nullsh"); // 0 
console.log(40 ?? "Nullsh"); // 40 
console.log(null ?? "Nullsh"); // Nullish <--------
console.log(undefined ?? "Nullsh"); // Nullish <---------
console.log("Hola mundo" ?? "Nullsh"); // "Hola mundo"
console.log("" ?? "Nullsh"); // " "
console.log(NaN ?? "Nullsh"); // NaN
console.log(true ?? "Nullsh"); // true
console.log(false ?? "Nullsh"); // false

const stock2 = 0 ?? "No hay stock"
console.log(stock2); 