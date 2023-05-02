import { supabase } from "./conexion.js"

let { data: { user } } = await supabase.auth.getUser()

let { data, error } = await supabase
    .from('eventos')
    .select(`count`)
    .eq('id_usuario_auth', user.id)

let limite = data[0].count;

({ data, error } = await supabase
    .from('eventos')
    .select()
    .eq('id_usuario_auth', user.id))

for (let index = 0; index < limite; index++) {

    sessionStorage.setItem("evento " + index, data[index].id_eventos);

    // Crear el div
    var div = document.createElement("div");

    // Establecer el estilo del div
    div.style.border = "1rem solid goldenrod";

    // Crear y agregar el elemento de texto del primer párrafo
    var nombreEvento = document.createElement("p");
    nombreEvento.textContent = data[index].nombre;
    div.appendChild(nombreEvento);

    // Crear y agregar el elemento de texto del segundo párrafo
    var fechaEvento = document.createElement("p");
    fechaEvento.textContent = "Fecha: "+data[index].fecha;
    div.appendChild(fechaEvento);

    // Crear y agregar el elemento de texto del tercer párrafo
    var entradaEvento = document.createElement("p");
    entradaEvento.textContent = "Entrada: "+data[index].precio_boleto;
    div.appendChild(entradaEvento);

    // Crear y agregar el elemento de texto del cuarto párrafo
    var estadoEvento = document.createElement("p");
    estadoEvento.textContent = "Estado: "+data[index].estado;
    div.appendChild(estadoEvento);

    // Crear y agregar el elemento de texto del quinto párrafo
    var tipoEvento = document.createElement("p");
    tipoEvento.textContent = "Tipo de evento: "+data[index].tipo;
    div.appendChild(tipoEvento);

    // Crear y agregar el enlace
    var enlaceEvento = document.createElement("a");
    enlaceEvento.href = "/admin/ver-evento.html";
    div.appendChild(enlaceEvento);

    // Crear y agregar el botón dentro del enlace
    var botonEvento = document.createElement("button");
    botonEvento.id = "evento " + index;
    botonEvento.textContent = "Ver evento";
    enlaceEvento.appendChild(botonEvento);

    // Agregar el nuevo div al contenedor
    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(div);
}

function imprimirId(event) {
    let id = event.target.id;
    sessionStorage.setItem('datoBotonEvento', id);
}

const enlaces = document.querySelectorAll("a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", imprimirId);
});
