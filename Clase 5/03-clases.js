console.log("");
console.log("-----------------------Clases----------------------");

/*
Las clases en JavaSript, al igual que los objetos y las funciones, son una parte fundamental
de las sintaxis de este lenguaje de programacion. Con ellas, podemos crear distintos objetos con \
caracteristicas especificas, permitiendonos crar un codigo mas eficiente.
Podemos representar a las clases como plantillas de un modelo a crear.
*/

class Persona {
    // Atributos
    nombre;
    apellido;
    edad;

       // Metodos: Equivalen a una funcion


   // Metodo constructor
   constructor(nombre, apellido, edad) {  // Es como si escribieramos "funcion cunstructor ( ) {}"
    this.nombre = nombre; // this indica que es un elemento propio de la clase
    this.apellido = apellido;
    this.edad = edad;
   }
}

const persona1 =  new Persona("Juan", "Perez", 30);
console.log(persona1);

const persona2 = new Persona ("Ana", "Diaz", 24);
console.log(persona2);

// Mostrar las propiedades de un objeto creando una clase
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona2.nombre);

console.log("");
console.log("----------------Clases con metodos------------------");

class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    cambiarPrecio (nuevoPrecio) { // ESTO ES UN METODO
        this.precio = nuevoPrecio;
    }
    comprar (cantidad) {
        if (this.stock > 0 ) {
            this.stock = this.stock - cantidad;
        } else {
            console.log("No hay stock");
        }
    
    }
    agregarStock (cantidad) {
        this.stock = this.stock + cantidad 
        console.log(`El nuevo stock es: ${this.stock} `);
    }
}

const productoZapato = new Producto ("Zapato", 300, 10);
console.log(productoZapato);

productoZapato.cambiarPrecio (500) // ASI SE MODIFICA UN METODO
console.log(productoZapato);

productoZapato.comprar(3);
console.log(productoZapato);

productoZapato.agregarStock(10);
console.log(productoZapato);