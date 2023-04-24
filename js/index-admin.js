import { supabase } from "./conexion.js"

const btnAccion = document.getElementById("accion");

btnAccion.addEventListener('click', accionFuncion)

async function accionFuncion() {

    const { data, error } = await supabase
        .from('eventos')
        .select()
        .eq('id_usuario_auth', 'a35419a1-7ce1-4182-ae46-23168d30d6d6')

    console.log(data[0]);

    /**
    var nuevoDiv = document.createElement("div");

    // Establecer el estilo del nuevo div
    nuevoDiv.setAttribute("style", "border: 1rem solid goldenrod;");

    // Composicion del div
    var nombreEvento = document.createElement("p");
    var textoNombreEvento = document.createTextNode(data[0].nombre);
    nombreEvento.appendChild(textoNombreEvento);

    var fecha = document.createElement("p");
    var textoFecha = document.createTextNode("Fecha: "+data[0].fecha);
    fecha.appendChild(textoFecha);

    var entrada = document.createElement("p");
    var textoEntrada = document.createTextNode("Entrada: "+data[0].precio_boleto);
    entrada.appendChild(textoEntrada);

    var estado = document.createElement("p");
    var textoEstado = document.createTextNode("Estado: "+data[0].estado);
    estado.appendChild(textoEstado);

    var tipoEvento = document.createElement("p");
    var textoTipoEvento = document.createTextNode("Tipo de evento: "+data[0].publico_privado);
    tipoEvento.appendChild(textoTipoEvento);

    // Agregar los elementos <p> al nuevo div
    nuevoDiv.appendChild(nombreEvento);
    nuevoDiv.appendChild(fecha);
    nuevoDiv.appendChild(entrada);
    nuevoDiv.appendChild(estado);
    nuevoDiv.appendChild(tipoEvento);

    // Agregar el nuevo div al contenedor
    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(nuevoDiv);
     */
}