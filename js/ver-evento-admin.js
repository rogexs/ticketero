import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");
const idEvento = sessionStorage.getItem(datoBoton);

const editarSD = document.getElementById("editar-sd");
const editar = document.getElementById("editar");

let { data, error } = await supabase
    .from('eventos')
    .select()
    .eq('id_eventos', idEvento)

var nombre = data[0].nombre;
var estado = data[0].estado;
var id = data[0].id_eventos;
var tipo = data[0].tipo;
var fecha = data[0].fecha;
var inicio = data[0].horario_inicio;
var fin = data[0].horario_final;
var ciudad = data[0].ciudad;
var direccion = data[0].direccion;
var organizador = data[0].organizador;
var cantidadInvitados = data[0].cantidad_invitados;
var fechaLimite = data[0].fecha_limite;
var precio = data[0].precio_boleto;
var extraEvento = data[0].costo_extra;

if (estado == "desplegado") {
    editarSD.style.display = "none"
} else {
    editar.style.display = "none"
}

({ data, error } = await supabase
    .storage
    .from('imagen-evento')
    .createSignedUrl(data[0].nombre, 600000))

// Obtener una referencia al párrafo mediante su id
var parrafoImagen = document.getElementById("imagenEvento");
var parrafoNombre = document.getElementById("nombreEvento");
var parrafoEstado = document.getElementById("estadoEvento");
var parrafoId = document.getElementById("idEvento");
var parrafoTipo = document.getElementById("tipoEvento");
var parrafoFecha = document.getElementById("fechaEvento");
var parrafoInicio = document.getElementById("horarioInicioEvento");
var parrafoFin = document.getElementById("horarioFinEvento");
var parrafoCiudad = document.getElementById("ciudadEvento");
var parrafoDireccion = document.getElementById("direccionEvento");
var parrafoOrganizador = document.getElementById("organizadorEvento");
var parrafoCantidad = document.getElementById("cantidadEvento");
var parrafoFechaLimite = document.getElementById("fechaLimiteEvento");
var parrafoPrecio = document.getElementById("precioEvento");
var parrafoExtraEvento = document.getElementById("costoExtraEvento");

// Modificar el contenido del párrafo
parrafoImagen.src = data.signedUrl;
parrafoNombre.textContent = nombre;
parrafoEstado.textContent = "Estado: "+ estado;
parrafoId.textContent = "ID: "+ id;
parrafoTipo.textContent = "Tipo: "+ tipo;
parrafoFecha.textContent = "Fecha: "+ fecha;
parrafoInicio.textContent = "Horario de inicio: "+ inicio;
parrafoFin.textContent = "Horario de fin: "+ fin;
parrafoCiudad.textContent = "Ciudad: "+ ciudad;
parrafoDireccion.textContent = "Direccion: "+ direccion;
parrafoOrganizador.textContent = "Organizador: "+ organizador;
parrafoCantidad.textContent = "Cantidad de invitados: "+ cantidadInvitados;
parrafoFechaLimite.textContent = "Fecha limite: "+fechaLimite;
parrafoPrecio.textContent = "Precio de boleto: "+ precio;
parrafoExtraEvento.textContent = "Costo extra de boleto: "+ extraEvento;