import { supabase } from "./conexion.js"

// Obtén el valor del parámetro "id" desde la URL
function obtenerValorIdDesdeURL() {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get('id');
}

const idBoleto = obtenerValorIdDesdeURL();

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
    .createSignedUrl("evento " + data[0].id_evento, 600000))

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

const boletoId = id_boleto;

// Crea la URL de la página de información del boleto
const url = 'http://127.0.0.1:5502/views/comprador/boletoQR.html?id=' + boletoId;

// Crea el objeto QRCode con la URL del boleto
const qr = qrcode(0, 'L');
qr.addData(url);
qr.make();

// Ajusta el tamaño del código QR
const tamañoQR = 250; // Tamaño en píxeles
const tamañoModulo = Math.floor(tamañoQR / qr.getModuleCount());

// Genera el código QR como una imagen en base64
const imagenQR = qr.createDataURL(tamañoModulo);

// Muestra el código QR en la página
const qrContainer = document.getElementById('qr-container');
const img = document.createElement('img');
img.src = imagenQR;
img.width = tamañoQR;
img.height = tamañoQR;
qrContainer.appendChild(img);