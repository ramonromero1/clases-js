const btnAlerta = document.querySelector ("#btnAlerta");
const btnAlerta2 = document.querySelector ("#btnAlerta2");


btnAlerta.onclik = () => {
    alert ("Primera alerta");
}

btnAlerta2.onclik = () =>{
    Swal.fire ({
        title: "Alerta 2"
    })
}
