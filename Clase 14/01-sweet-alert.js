// Tiene los estilos de boostrap 

// npm install sweetalert2

import Swal from "sweetalert2"

const btnAlerta = document.querySelector ("#btnAlerta");
const btnAlerta2 = document.querySelector ("#btnAlerta2");
const nombre = document.querySelector ("#nombre");


Swal.fire ({
    inputLabel: "Ingrese su Nombre",
    input: "text",
    confirmButtonText: "Enviar"
}).then (respuesta =>{
    if (respuesta.isConfirmed){
        nombre.innerText = respuesta.value
    }
}) 


btnAlerta.onclik = () => {
    alert ("Primera alerta");
}

//sweetalert
btnAlerta2 = () =>{
    Swal.fire ({
        title: "Alerta",
        text: "texto de alerta",
        icon: "info",
        timer: 2000,
        timerProgressBar: true, // Barrita debajo de la alerta que muestra el tiempo que le queda
        confirmButtonText: "Aceptar",
        confirmButtonColor: "black",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "red",
        htmll: "<h1>Holaa<h1>", // Reemplaza el texto de arriba
    }).then( respuesta => {

        // Verificamos que el usuario presiono confirmar o aceptar
        if (respuesta.isConfirmed) {
            Swal.fire({
                title: "Acepto",
                imageUrl: "https://cdn-icons-png.flaticon.com/512/5261/5261648.png",
                imageWidth: "200px"
            })
            
        } //else {
            //console.log("Cancelo");
       // }

       if (respuesta.isDismissed) {  // Es mejor asi para mostrar que se cancelo por si se acaba el timer
        Swal.fire({
            title: "Cancelo",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/1810/1810747.png",
            imageWidth: "200px" // Se puede cambiar el tamaño de la imagen

        })
       }
    });
};

