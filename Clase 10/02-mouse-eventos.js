// Eventos de mouse

// Se producen por la interaccion del usuario con el mouse

const cajita1 = document.querySelector ("#cajita1");
const cajita2 = document.querySelector ("#cajita2");
const cajita3 = document.querySelector ("#cajita3");

// mousemove
// El movimiento del mouse sobre el elemento activa el evento.

cajita1.addEventListener("mousemove", () => {
    console.log("Mouse dentro del la cajita 1");
})

// mousedown
// Se oprime el boton del raton sobre un elemento.

cajita2.addEventListener("mousedown", () => {
    console.log("Evento mousedown");
})

// mouse up
// Se suelta el boton del raton sobre un elemento.
cajita1.addEventListener("mouseup", () => {
    console.log("Evento mouseup");
})

// mouseout
// El puntero del mouse se mueve sale del evento

cajita3.addEventListener ("mousemove", () => {
    cajita3.classList.add ("bg-rojo");
    cajita3.innerText = "Dentro"
})

cajita3. addEventListener ("mouseout", () => {
    cajita3.classList.remove("bg-rojo");
    cajita3.innerText = "Cajita3"
})


let btnSumar = document.querySelector ("#btnSumar");
let btnRestar = document.querySelector ("#btnRestar");
let contador = document.querySelector ("#constador");

let numeroContador = 0;

contador.innerText = numeroContador;

//let stock = 5 Como limitar el stock

btnSumar.onclick = () => {
//   if (numeroContador == stock) {
//        return numeroContador = stock;
//    }
    numeroContador++;
    contador.innerText = numeroContador;
}

btnRestar.onclick = () => {
//    if(numeroContador == 0) {
//        return numeroContador = 0;
        // El return hace que salga de la funcion y no se ejecute el resto del codigo
//    }
    numeroContador--;
    contador.innerText = numeroContador;
}


