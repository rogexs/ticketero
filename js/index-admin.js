import { supabase } from "./conexion.js"

const btnAccion = document.getElementById("accion");

btnAccion.addEventListener('click', accionFuncion)

async function accionFuncion() {

    let { data: { user } } = await supabase.auth.getUser()
    console.log(user.id);
    
    let { data, error } = await supabase
        .from('eventos')
        .select(`count`)
        .eq('id_usuario_auth', user.id)

    console.log(data[0].count);
    let limite = data[0].count;

    ({ data, error } = await supabase
        .from('eventos')
        .select()
        .eq('id_usuario_auth', 'a35419a1-7ce1-4182-ae46-23168d30d6d6'))

    console.log(data[0]);

    for (let index = 0; index < limite; index++) {

        var nuevoDiv = document.createElement("div");

    // Establecer el estilo del nuevo div
    nuevoDiv.setAttribute("style", "border: 1rem solid goldenrod;");

    // Composicion del div
    var nombreEvento = document.createElement("p");
    var textoNombreEvento = document.createTextNode(data[index].nombre);
    nombreEvento.appendChild(textoNombreEvento);

    var fecha = document.createElement("p");
    var textoFecha = document.createTextNode("Fecha: "+data[index].fecha);
    fecha.appendChild(textoFecha);

    var entrada = document.createElement("p");
    var textoEntrada = document.createTextNode("Entrada: "+data[index].precio_boleto);
    entrada.appendChild(textoEntrada);

    var estado = document.createElement("p");
    var textoEstado = document.createTextNode("Estado: "+data[index].estado);
    estado.appendChild(textoEstado);

    var tipoEvento = document.createElement("p");
    var textoTipoEvento = document.createTextNode("Tipo de evento: "+data[index].publico_privado);
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

    }

}