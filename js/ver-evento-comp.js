import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");

const idEvento = sessionStorage.getItem(datoBoton);

let { data, error } = await supabase
    .from('eventos')
    .select()
    .eq('id_eventos', idEvento)

var nombre = data[0].nombre;
var id = data[0].id_eventos;
var tipo = data[0].tipo;
var fecha = data[0].fecha;
var inicio = data[0].horario_inicio;
var fin = data[0].horario_final;
var ciudad = data[0].ciudad;
var direccion = data[0].direccion;
var fechaLimite = data[0].fecha_limite;
var precio = data[0].precio_boleto;
var descripcion = data[0].descripcion;

({ data, error } = await supabase
    .storage
    .from('imagen-evento')
    .createSignedUrl(data[0].nombre, 600000))

// Obtener una referencia al párrafo mediante su id
var parrafoImagen = document.getElementById("imagenEvento");
var parrafoNombre = document.getElementById("nombreEvento");
var parrafoId = document.getElementById("idEvento");
var parrafoTipo = document.getElementById("tipoEvento");
var parrafoFecha = document.getElementById("fechaEvento");
var parrafoInicio = document.getElementById("horarioInicioEvento");
var parrafoFin = document.getElementById("horarioFinEvento");
var parrafoCiudad = document.getElementById("ciudadEvento");
var parrafoDireccion = document.getElementById("direccionEvento");
var parrafoFechaLimite = document.getElementById("fechaLimiteEvento");
var parrafoPrecio = document.getElementById("precioEvento");
var parrafoDescripcionEvento = document.getElementById("descripcionEvento");

// Modificar el contenido del párrafo
parrafoImagen.src = data.signedUrl;
parrafoNombre.textContent = nombre;
parrafoId.textContent = "ID: "+ id;
parrafoTipo.textContent = "Tipo: "+ tipo;
parrafoFecha.textContent = "Fecha: "+ fecha;
parrafoInicio.textContent = "Horario de inicio: "+ inicio;
parrafoFin.textContent = "Horario de fin: "+ fin;
parrafoCiudad.textContent = "Ciudad: "+ ciudad;
parrafoDireccion.textContent = "Direccion: "+ direccion;
parrafoFechaLimite.textContent = "Fecha limite: "+fechaLimite;
parrafoPrecio.textContent = "Precio de boleto: "+ precio;
parrafoDescripcionEvento.textContent = "Descripcion: "+ descripcion;