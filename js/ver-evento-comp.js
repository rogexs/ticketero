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
    .createSignedUrl('evento '+id, 600000))

// Obtener una referencia al párrafo mediante su id
var parrafoImagen = document.getElementById("mi-imagen");
var parrafoNombre = document.getElementById("staticEvent");
var parrafoId = document.getElementById("staticID");
var parrafoTipo = document.getElementById("staticTipoEvento");
var parrafoFecha = document.getElementById("staticFecha");
var parrafoInicio = document.getElementById("staticInicio");
var parrafoFin = document.getElementById("staticFin");
var parrafoCiudad = document.getElementById("staticCiudad");
var parrafoDireccion = document.getElementById("staticDireccion");
var parrafoFechaLimite = document.getElementById("staticFechaLimite");
var parrafoPrecio = document.getElementById("staticPrecio");
var parrafoDescripcionEvento = document.getElementById("descripcionEvento");

// Modificar el contenido del párrafo
parrafoImagen.src = data.signedUrl;
parrafoNombre.value = nombre;
parrafoId.value = id;
parrafoTipo.value = tipo;
parrafoFecha.value = fecha;
parrafoInicio.value = inicio;
parrafoFin.value = fin;
parrafoCiudad.value= ciudad;
parrafoDireccion.value = direccion;
parrafoFechaLimite.value = fechaLimite;
parrafoPrecio.value = precio;
parrafoDescripcionEvento.textContent = descripcion;