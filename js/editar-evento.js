import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");

const idEvento = sessionStorage.getItem(datoBoton);

let { data, error } = await supabase
    .from('eventos')
    .select()
    .eq('id_eventos', idEvento)

var nombre = data[0].nombre;
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
var publico_privado = data[0].publico_privado;
var descripcion = data[0].descripcion;

({ data, error } = await supabase
    .storage
    .from('imagen-evento')
    .createSignedUrl(data[0].nombre, 600000))

// Obtener una referencia al párrafo mediante su id
const txtNombre = document.getElementById("nombre");
const txtTipo = document.getElementById("tipo");
const txtFecha = document.getElementById("fecha");
const txtHorarioInicio = document.getElementById("horarioInicio");
const txtHorarioFinal = document.getElementById("horarioFinal");
const txtCiudad = document.getElementById("ciudad");
const txtDireccion = document.getElementById("direccion");
const txtOrganizador = document.getElementById("organizador");
const txtCantidadInvitados = document.getElementById("cantidad-invitados");
const txtFechaLimite = document.getElementById("fecha-limite");
const txtPrecioBoleto = document.getElementById("precio-boleto");
const txtCostoExtra = document.getElementById("costo-extra");
const txtPublicoPrivado = document.getElementById("publico-privado");
const txtDescripcion = document.getElementById("descripcion");

// Modificar el contenido del párrafo
txtNombre.value = nombre;
txtTipo.value = tipo;
txtFecha.value = fecha;
txtHorarioInicio.value = inicio;
txtHorarioFinal.value = fin;
txtCiudad.value = ciudad;
txtDireccion.value = direccion;
txtOrganizador.value = organizador;
txtCantidadInvitados.value = cantidadInvitados;
txtFechaLimite.value = fechaLimite;
txtPrecioBoleto.value = precio;
txtCostoExtra.value = extraEvento;
txtPublicoPrivado.value = publico_privado;
txtDescripcion.value = descripcion;

async function registrarEvento() {
    let nombreEdit = txtNombre.value;
    let tipoEdit = txtTipo.value;
    let fechaEdit = txtFecha.value;
    let horario_inicioEdit = txtHorarioInicio.value;
    let horario_finalEdit = txtHorarioFinal.value;
    let ciudadEdit = txtCiudad.value;
    let direccionEdit = txtDireccion.value;
    let organizadorEdit = txtOrganizador.value;
    let cantidad_invitadosEdit = txtCantidadInvitados.value;
    let fecha_limiteEdit = txtFechaLimite.value;
    let precio_boletoEdit = txtPrecioBoleto.value;
    let costo_extraEdit = txtCostoExtra.value;
    let publico_privadoEdit = txtPublicoPrivado.value;
    let descripcionEdit = txtDescripcion.value;
    let id_usuario_auth;
    
    alert(nombreEdit);

    /**
    const { data: { user } } = await supabase.auth.getUser()
    id_usuario_auth = user.id;
 
    const { error } = await supabase
       .from('eventos')
       .insert({ id_usuario_auth, nombreEdit, tipoEdit, fechaEdit, horario_inicioEdit, horario_finalEdit, ciudadEdit, direccionEdit, organizadorEdit, cantidad_invitadosEdit, fecha_limiteEdit, precio_boletoEdit, costo_extraEdit, publico_privadoEdit, descripcionEdit })
 
    const imagen = document.getElementById("img").files[0];
    
    console.log(imagen);
     
    const { data, error2 } = await supabase
       .storage
       .from('imagen-evento')
       .upload(nombre, imagen, {
          cacheControl: '3600',
          upsert: false
       })
       
    if (error) {
       alert('Registro evento incorrecto')
       console.log(error);
    } else {
       alert('Registro evento correcto');
    }
    */
 }