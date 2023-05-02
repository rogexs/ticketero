import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");

const idEvento = sessionStorage.getItem(datoBoton);

let { data, error } = await supabase
    .from('eventos')
    .select()
    .eq('id_eventos', idEvento)

// Obtener una referencia al párrafo mediante su id
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
parrafoNombre.textContent = data[0].nombre;
parrafoEstado.textContent = "Estado: "+data[0].estado
parrafoId.textContent = "ID: "+data[0].id_eventos;
parrafoTipo.textContent = "Tipo: "+data[0].tipo;
parrafoFecha.textContent = "Fecha: "+data[0].fecha
parrafoInicio.textContent = "Horario de inicio: "+data[0].horario_inicio;
parrafoFin.textContent = "Horario de fin: "+data[0].horario_final;
parrafoCiudad.textContent = "Ciudad: "+data[0].ciudad
parrafoDireccion.textContent = "Direccion: "+data[0].direccion
parrafoOrganizador.textContent = "Organizador: "+data[0].organizador
parrafoCantidad.textContent = "Cantidad de invitados: "+data[0].cantidad_invitados
parrafoFechaLimite.textContent = "Fecha limite: "+data[0].fecha_limite
parrafoPrecio.textContent = "Precio de boleto: "+data[0].precio_boleto
parrafoExtraEvento.textContent = "Costo extra de boleto: "+data[0].costo_extra