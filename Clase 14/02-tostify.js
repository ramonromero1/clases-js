//npm install sweetalert2

import toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const tostify1 = document.querySelector ("#tostify1");
const tostify2 = document.querySelector ("#tostify2");

tostify1.onclick = () => {
    toastify({
        text: "Boton 1",
        gravity: "bottom",
        position: " left",
        //destination: "www.google.com",
        onclick: () =>{
            //console.log("click");
            toastify({
                text: "click"
            }).showToast()
        }
    }).showToast()
}