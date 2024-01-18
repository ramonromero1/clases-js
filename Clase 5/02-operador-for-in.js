console.log("");;
console.log("-------------Operador in y for..in----------------");

/*
El operador in devuelve true si la propiedad especificada existe en el objeto
Mientras que el bucle for.. in permite acceder a todas las propiedades del objeto,
obteniendo una propiedad por cada iteracion.
*/
// Interar es un recorrido

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    direccion: "Av. False 123",

};

// Recorre el objeto con un ciclo for y la propiedad in , para mostrar las propiedades del objeto
// in como diciendo EN

for ( let propiedad in persona) {
    console.log(propiedad);
};

// Recorre el objeto con un ciclo for y la propiedad in, para mostrar los valores del objeto

for(let propiedad in persona) {
    console.log(persona[propiedad]);
//  console.log(persona["Nombre"]);
//  console.log(persona["Apellido"]);
}

for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}