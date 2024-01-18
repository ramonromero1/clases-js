let listaUsuarios = document.querySelector ("#listaUsuarios")

personas.forEach(persona => {
    let tarjeta = document.createElement ("div");
    tarjeta.className = "border border-2 p-3 w-50";
    tarjeta.innerHTML = `
    <p> Nombre: ${perosna.nombre} </p>
    <p> Edad: ${persona.edad} </p>
    <p> Pais:${persona.pais} </p>
    `;
    listaUsuarios.appendChild(tarjeta);
})

