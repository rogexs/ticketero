import { supabase } from "./conexion.js"

let { data: { user } } = await supabase.auth.getUser()

let { data, error } = await supabase
    .from('eventos')
    .select(`count`)
    .eq('id_usuario_auth', user.id)

let limite = data[0].count;

({ data, error } = await supabase
    .from('eventos')
    .select('nombre')
    .eq('id_usuario_auth', user.id))

let nombreURL = [];

for (let index = 0; index < limite; index++) {
    nombreURL.push(data[index].nombre);
}

let imgURL = [];

for (let index = 0; index < limite; index++) {
    ({ data, error } = await supabase
        .storage
        .from('imagen-evento')
        .createSignedUrl(nombreURL[index], 600000))

    imgURL.push(data.signedUrl);
}

({ data, error } = await supabase
    .from('eventos')
    .select()
    .eq('id_usuario_auth', user.id))

for (let index = 0; index < limite; index++) {

    sessionStorage.setItem("evento " + index, data[index].id_eventos);

    // Obtener el elemento contenedor
    var contenedor = document.getElementById("contenedor");

    // Crear el elemento div
    var div = document.createElement("div");

    // Establecer el estilo del borde
    div.setAttribute("style", "border: 1rem solid goldenrod;");

    // Crear la imagen y establecer sus atributos
    var imagen = document.createElement("img");
    imagen.setAttribute("src", imgURL[index]);
    imagen.setAttribute("alt", "Imagen de evento");
    imagen.setAttribute("style", "max-width: 250px;");

    // Crear los elementos de texto
    var nombreEvento = document.createElement("p");
    nombreEvento.innerText = data[index].nombre;

    var fecha = document.createElement("p");
    fecha.innerText = "Fecha: " + data[index].fecha;

    var entrada = document.createElement("p");
    entrada.innerText = "Entrada: " + data[index].precio_boleto;

    var estado = document.createElement("p");
    estado.innerText = "Estado: " + data[index].estado;

    var tipoEvento = document.createElement("p");
    tipoEvento.innerText = "Tipo de evento: " + data[index].tipo;

    // Crear el enlace y el botón
    var enlace = document.createElement("a");
    enlace.setAttribute("href", "/admin/ver-evento.html");

    var boton = document.createElement("button");
    boton.setAttribute("id", "botoncito");
    boton.setAttribute("value", "valorcito");
    boton.innerText = "Ver evento";

    // Agregar los elementos hijos al div
    div.appendChild(imagen);
    div.appendChild(nombreEvento);
    div.appendChild(fecha);
    div.appendChild(entrada);
    div.appendChild(estado);
    div.appendChild(tipoEvento);
    enlace.appendChild(boton);
    div.appendChild(enlace);

    // Agregar el div al contenedor
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
