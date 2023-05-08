import { supabase } from "./conexion.js"

const datoBotonBoleto = sessionStorage.getItem("datoBotonBoleto");
const idBoleto = sessionStorage.getItem(datoBotonBoleto);

let { data, error } = await supabase
    .from('boletos')
    .select()
    .eq('id_boleto', idBoleto)

var nombre_evento = data[0].nombre_evento;
var id_evento = data[0].id_evento;
var tipo_evento = data[0].tipo_evento;
var fecha_evento = data[0].fecha_evento;
var hora_inicio = data[0].hora_inicio;
var hora_final = data[0].hora_final;
var ciudad = data[0].ciudad;
var direccion = data[0].direccion;

var id_boleto = data[0].id_boleto;
var nombre_comprador = data[0].nombre_comprador;
var correo = data[0].correo;
var fecha_compra = data[0].fecha_compra;
var hora_compra = data[0].hora_compra;
var estado_boleto = data[0].estado_boleto;

({ data, error } = await supabase
    .storage
    .from('imagen-evento')
    .createSignedUrl("evento "+data[0].id_evento, 600000))

var parrafoImagen = document.getElementById("imagenEvento");
var parrafoNombreEvento = document.getElementById("nombreEvento");
var parrafoIdEvento = document.getElementById("idEvento");
var parrafoTipo = document.getElementById("tipoEvento");
var parrafoFecha = document.getElementById("fechaEvento");
var parrafoInicio = document.getElementById("horarioInicioEvento");
var parrafoFin = document.getElementById("horarioFinEvento");
var parrafoCiudad = document.getElementById("ciudadEvento");
var parrafoDireccion = document.getElementById("direccionEvento");

parrafoImagen.src = data.signedUrl;
parrafoNombreEvento.value = nombre_evento;
parrafoIdEvento.value = id_evento;
parrafoTipo.value = tipo_evento;
parrafoFecha.value = fecha_evento;
parrafoInicio.value = hora_inicio;
parrafoFin.value = hora_final;
parrafoCiudad.value = ciudad;
parrafoDireccion.value = direccion;

var parrafoIdComprador = document.getElementById("idComprador");
var parrafoNombreComprador = document.getElementById("nombreComprador");
var parrafoCorreo = document.getElementById("correo");
var parrafoFechaCompra = document.getElementById("fechaCompra");
var parrafoHoraCompra = document.getElementById("horaCompra");
var parrafoEstadoBoleto = document.getElementById("estadoBoleto");

parrafoIdComprador.value = id_boleto;
parrafoNombreComprador.value = nombre_comprador;
parrafoCorreo.value = correo;
parrafoFechaCompra.value = fecha_compra;
parrafoHoraCompra.value = hora_compra;
parrafoEstadoBoleto.value = estado_boleto;

const btnEliminarBoleto = document.getElementById("eliminarBoleto");

btnEliminarBoleto.addEventListener('click', eliminar)

async function eliminar() {

   let { error } = await supabase
      .from('boletos')
      .delete()
      .eq('id_boleto', id_boleto)

   if (error) {
      alert(error);
   }else{
    alert("boleto eliminado")
    window.location.href = '/views/comprador/misBoletos.html'
   }
}