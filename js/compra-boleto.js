import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");
const idEvento = sessionStorage.getItem(datoBoton);

let { data, error } = await supabase
    .from('eventos')
    .select()
    .eq('id_eventos', idEvento)

var nombre_evento = data[0].nombre;
var id_evento = data[0].id_eventos;
var tipo_evento = data[0].tipo;
var fecha_evento = data[0].fecha;
var hora_inicio = data[0].horario_inicio;
var hora_final = data[0].horario_final;
var ciudad = data[0].ciudad;
var direccion = data[0].direccion;
var precio_evento = data[0].precio_boleto;

({ data, error } = await supabase.auth.getSession())

var id_auth = data.session.user.id;

({ data, error } = await supabase
    .from('usuarios')
    .select()
    .eq('id_usuario_auth', id_auth))

let id_usuario = data[0].id_usuario;
let nombre_comprador = data[0].nombre;
let correo = data[0].correo;

var parrafoNombreComprador = document.getElementById("staticNombre");
var parrafoCorreo = document.getElementById("staticEmail");
var parrafoCosto = document.getElementById("staticCosteBoleto");

parrafoNombreComprador.value = nombre_comprador;
parrafoCorreo.value = correo;
parrafoCosto.value = precio_evento;

var btnComprar = document.getElementById("compraBoleto");

btnComprar.addEventListener('click', comprarBoleto)

async function comprarBoleto() {
    // Obtener la hora actual
    const horaActual = new Date();

    // Obtener las horas, minutos y segundos
    const horas = horaActual.getHours();
    const minutos = horaActual.getMinutes();

    // Crear una cadena con el formato "HH:MM:SS"
    const hora_compra = `${horas}:${minutos}`;

    // Obtener la fecha actual
    const fechaActual = new Date();

    // Obtener el día, mes y año
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan en 0, por lo que se agrega 1
    const año = fechaActual.getFullYear();

    // Crear una cadena con el formato "día/mes/año"
    const fecha_compra = `${dia}/${mes}/${año}`;

    const { error } = await supabase
        .from('boletos')
        .insert({
            id_usuario,
            nombre_comprador,
            correo,
            fecha_compra,
            hora_compra,
            id_evento,
            nombre_evento,
            tipo_evento,
            fecha_evento,
            hora_inicio,
            hora_final,
            ciudad,
            direccion
        })

    if (error) {
        console.log(error);
        alert("Error de compra")
    } else {
        alert("Compra correcta")
        window.location.href = "/comp/comprador-home.html";
    }
}
