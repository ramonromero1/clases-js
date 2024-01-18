
let areaMensaje = document.querySelector ("#areaMensaje");
let nombreUsuario = document.querySelector ("#nombreUsuario");
let mensajeUsuario = document.querySelector ("#mensajeUsuario");

let notificacion = document.querySelector ("p");
notificacion.classList.add ("position-absolute");

// keydown : Cuando se presiona una tecla en el teclado.
nombreUsuario.onkeydown = () => {
    // Mostramos el valor del imput cada vez que presionamos el tecldo
    console.log(nombreUsuario.value);
    notificacion.innerText = `${nombreUsuario.value} esta escribiendo un mensaje`
}

mensajeUsuario.onkeydown = () => {
    areaMensaje.append (notificacion);
}

// keyup : Cuando se suelta una tecla del teclado
mensajeUsuario.onkeyup = () =>{
    notificacion.remove ();
}


// Formulario de registro (podria utilizarlo para hacer un formulario de clientes)

let formulario = document.querySelector ("#formulario");
let nombreInput = document.querySelector ("#nombreInput");
let apellidoInput = document.querySelector ("#apellidoInput");
let listaPersonas = document.querySelector ("#listaPersonas");

// Eventos de change
/*
El evento change se activa cuando se detecta un cambio en el valor del elemento.
Por ejemplo, mientras se escribe en un input de tipo texto no hay evento change,
pero cuando se pasa a otra seleccion de la aplicacion entonces si ocurre.
*/

nombreInput.onchange = () => {
    console.log(nombreInput.value);
}

apellidoInput.onchange = () => {
    console.log(apellidoInput.value);
}


// Eventos submit 
/*
El evento submit se activa cuando el formulario es enviado.
Normalmente se utiliza para validar el formulario antes de ser enviado al servidor o bien para abortar el envio y procesarlo con JavaScript
*/

let alumnos = [];

const mostarAlumnos = () => {

    listaPersonas.innerText = ""; // Cada vez que se ejecute se resetea la lista y despues recorre los alumnos
   
    alumnos.forEach (alumno => {
        // Creo una etiqueta li por cada usuario del array
        let li = document.createElement ("li");
        li.innerText = `${alumno.nombre} ${alumno.apellido}`;
        listaPersonas.appendChild(li);
    })
}

formulario.onsumbit = (event) => {  //para evitar que el formulario se recargue (event o e)
    event.preventDefault();
    console.log("formulario");
    if (nombreInput.value === "" || apellidoInput.value === "") {
         return alert ("Debe completar todos los campos")
    }
    

    let alumno = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value
    }
    


    console.log(alumno);
    alumnos.push (alumno)
    console.log(alumnos);
    formulario.reset();
    mostrarAlumnos();
}

