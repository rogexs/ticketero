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
    .eq('id_usuario_auth', 'a35419a1-7ce1-4182-ae46-23168d30d6d6'))

for (let index = 0; index < limite; index++) {

    sessionStorage.setItem("dato " + index, "El id de evento es: " + data[index].id_eventos);

    // Crear el div
    var div = document.createElement("div");

    // Establecer el estilo del div
    div.style.border = "1rem solid goldenrod";

    // Crear y agregar el elemento de texto del primer párrafo
    var nombreEvento = document.createElement("p");
    nombreEvento.textContent = "Nombre de evento";
    div.appendChild(nombreEvento);

    // Crear y agregar el elemento de texto del segundo párrafo
    var fechaEvento = document.createElement("p");
    fechaEvento.textContent = "Fecha: xx/xx/xxxx";
    div.appendChild(fechaEvento);

    // Crear y agregar el elemento de texto del tercer párrafo
    var entradaEvento = document.createElement("p");
    entradaEvento.textContent = "Entrada: $$$$$";
    div.appendChild(entradaEvento);

    // Crear y agregar el elemento de texto del cuarto párrafo
    var estadoEvento = document.createElement("p");
    estadoEvento.textContent = "Estado: xxxxxxx";
    div.appendChild(estadoEvento);

    // Crear y agregar el elemento de texto del quinto párrafo
    var tipoEvento = document.createElement("p");
    tipoEvento.textContent = "Tipo de evento: xxxxxxx";
    div.appendChild(tipoEvento);

    // Crear y agregar el enlace
    var enlaceEvento = document.createElement("a");
    enlaceEvento.href = "/admin/ver-evento.html";
    div.appendChild(enlaceEvento);

    // Crear y agregar el botón dentro del enlace
    var botonEvento = document.createElement("button");
    botonEvento.id = index;
    botonEvento.value = index;
    botonEvento.textContent = "Ver evento";
    enlaceEvento.appendChild(botonEvento);

    // Agregar el nuevo div al contenedor
    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(div);
}
