console.log("");
console.log("-------------------------- Promesas ----------------------------");

/*
Es un objeto JavaScript que representa un evento o futuro. Es una accion asincrinica que se puede completar en algun momento
y producir un valor, y notificar cuando esto suceda. Una promesa cuenta con tres estados posibles: pending, fulfilled y rejected.
Las promesas pueden ser resueltas o rechazadas.
*/

// Sintaxis de una promesa

new Promise ( (resolve, rejected) => {} );

// En principio, una promesa se retorna con estado pending (pendiente), entendiendo que el valor a generar aun no fue resuelto.

//const eventoFuturo = (estado) => {
    // Esta funcion va a retornar a una promesa
//    return new Promise ((resolve, rejected) => {
//        if (estado) {
//            resolve( "Promesa resuelta" )
//        } else {
//            rejeact ( "Promesa rechazada" )
//        }
//    } )
//}

const eventoFuturo = (estado) => {
    // Esta funcion va a retornar a una promesa
    return new Promise( (resolve, rejected) => { 
        setTimeout(() => {
            if (estado) {
                resolve( "Promesa resuelta" )
            } else {
                rejeact ( "Promesa rechazada" )
            }
        } )
    },1000)
}
       

//console.log(eventoFuturo(true));
//console.log(eventoFuturo(false));


/*
En este caso, el console.log es sincronico y vemos que la promesa esta en pendig en ambos llamados (su resolucion se genera dentro de 1s).
Las promesas tienen un mecanismo para trabajar esta asincronia y poder ejecutar funciones cuando cambie su estado.
*/

console.log("");
console.log("---------------------- Then & Catch --------------------");

// Usamos el then para atrapar la respuesta de una promesa resuelta y el catch para atrapar la respuesta de una promesa rechazada

const usuarios = [
    {
        id: 1,
        nombre : "Juan",
    },
    {
        id: 2,
        nombre: "Maria",
    },
    {
        id: 3,
        nombre: "Pedro",
    },
];

const buscarUsuarioPorId = (id) => {
    // Buscamos el usuario con el id que recibimos por parametro
    const usuario = usuarios.find (usuario => usuario.id === id);

    // Retornar una promesa
    return new Promise ((resolve, reject) =>{

        if (usuario) {
            // Si el resultado de la busqueda nos da que el usuario existe
            // Resolvemos la promesa devolviendo el valor del usuario encontrado
            resolve(usuario);
        } else {
            // Rechazamos la promesa
            rejeact(`No se encontro el usuario por id ${id}`)
        }

    })
}

buscarUsuarioPorId(1)
//buscarUsuarioPorId(9) Este da error
    .then( respuesta => {
        // El valor que recibimos por el parametro es la informacion que recibimos del resolve()
        console.log(respuesta);
    } )
    .catch(error => console.log(`Error: ${error}`))

    .finally(() => { // Se ejecuta por las que la promesa fue aceptada o rechazada
      console.log("Fin del proceso");
    }) 



// Ejercicio

const buscarUsuarios = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve( usuarios );
        }, 2000)
    })
}



let listaUsuarios = document.querySelector("#listaUsuarios");

const mostrarUsuarios = (usuarios) => {
    listaUsuarios.innerText = "";

    usuarios.forEach(usuario => {
        let nombreUsuario = document.createDocumentElement("p");
        nombreUsuario.innerText = usuario.nombre;
        listaUsuarios.append (nombreUsuario);
    });
}

buscarUsuarios()
    .then ( respuesta => mostrarUsuarios ( respuesta ));