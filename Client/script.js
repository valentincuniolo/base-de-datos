document.addEventListener("DOMContentLoaded",()=>{
    const obtenerDatos=document.getElementById("obtener datos")
    obtenerDatos.addEventListener("click",()=>{

fetch("http://localhost:3000/track")
.then(res=>res.json())
.then(data=>{
    const contenedor=document.querySelector("#lista-canciones");
    contenedor.innerHTML="";
    data.forEach(cancion => {

        const itemCancion= document.createElement("li");
        const detalles= document.createElement("ul");


Object.entries(cancion).forEach(([clave,valor])=>{

    const lidetalle=document.createElement("li")
    lidetalle.textContent= `${clave}: ${valor}`;
    detalles.appendChild(lidetalle)



});

itemCancion.appendChild(detalles)
contenedor.appendChild(itemCancion)




    });
})

    })



})