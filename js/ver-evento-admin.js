import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");
const idEvento = sessionStorage.getItem(datoBoton);
 
const editarSD = document.getElementById("lista-opciones").getElementsByTagName("li")[0];
const editar = document.getElementById("lista-opciones").getElementsByTagName("li")[1];

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
    .createSignedUrl("evento "+idEvento, 600000))

// Obtener una referencia al párrafo mediante su id
var parrafoImagen = document.getElementById("imagenEvento");
var parrafoNombre = document.getElementById("staticEvent");
var parrafoEstado = document.getElementById("staticEstado");
var parrafoId = document.getElementById("staticID");
var parrafoTipo = document.getElementById("staticTipoEvento");
var parrafoFecha = document.getElementById("staticFecha");
var parrafoInicio = document.getElementById("staticHorarioInicio");
var parrafoFin = document.getElementById("staticHorarioFin");
var parrafoCiudad = document.getElementById("staticCiudad");
var parrafoDireccion = document.getElementById("staticDireccion");
var parrafoOrganizador = document.getElementById("staticOrganizador");
var parrafoCantidad = document.getElementById("staticCantidadInvitados");
var parrafoFechaLimite = document.getElementById("staticFechaLimite");
var parrafoPrecio = document.getElementById("staticPrecio");
var parrafoExtraEvento = document.getElementById("staticCostoExtra");

// Modificar el contenido del párrafo
parrafoImagen.src = data.signedUrl;
parrafoNombre.value = nombre;
parrafoEstado.value = estado;
parrafoId.value = id;
parrafoTipo.value = tipo;
parrafoFecha.value= fecha;
parrafoInicio.value = inicio;
parrafoFin.value = fin;
parrafoCiudad.value = ciudad;
parrafoDireccion.value = direccion;
parrafoOrganizador.value = organizador;
parrafoCantidad.value = cantidadInvitados;
parrafoFechaLimite.value = fechaLimite;
parrafoPrecio.value = precio;
parrafoExtraEvento.value = extraEvento;

({ data, error } = await supabase
  .from('boletos')
  .select(`count`)
  .eq('id_evento', idEvento))

let limite = data[0].count;

({ data, error } = await supabase
  .from('boletos')
  .select()
  .eq('id_evento', idEvento))

for (let index = 0; index < limite; index++) {
  // Obtener la referencia al elemento tbody
const tbody = document.getElementById('contenido-tabla');

// Crear el primer elemento tr
const tr1 = document.createElement('tr');

// Crear el elemento th con el id "idNum" y el atributo scope
const th1 = document.createElement('th');
th1.id = 'idNum';
th1.setAttribute('scope', 'row');
th1.textContent = data[0].id_boleto;
tr1.appendChild(th1);

// Crear el elemento td con el id "nombre"
const td1 = document.createElement('td');
td1.id = 'nombre';
td1.textContent = data[0].nombre_comprador;
tr1.appendChild(td1);

// Crear el elemento td con el id "asistencia"
const td2 = document.createElement('td');
td2.id = 'asistencia';
td2.textContent = data[0].asistencia;
tr1.appendChild(td2);

// Agregar el primer tr al tbody
tbody.appendChild(tr1);
}