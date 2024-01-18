console.log("");
console.log("---------------------- Operador rest params-----------------------");

/*
El operador spread tambien puede utilizarse dentro de la declaracion de una funcion para indicar que queremos recibir una
cantidad indeterminada de parametros.
*/

// Hace la inversa del anterior operador, toma los elementos desparramados y los pone en un array

const arrayElementos = (...Elementos) => {
    console.log(elementos);
};

arrayElementos("Juan", "Ana", "Pedro",);

// Segundo Ejemplo

const personaConMascotas = (persona, ...mascotas) => {
    let personaMascoteada = {
        ...persona,
        mascotas
    }
    console.log(personaMascoteada);
}

let juan = {
    nombre: "Juan",
    apellido: "Perez"
}

// En la primera propiedad recibimos al objeto (persona) y en la segunda un array
personaConMascotas(juan, "Jane", "Kratos", "Lucas", "Akira");