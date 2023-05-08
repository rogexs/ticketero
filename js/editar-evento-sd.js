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

const btnEditar = document.getElementById("editarEvento");
btnEditar.addEventListener('click', editarEvento)

async function editarEvento() {
   let nombre = txtNombre.value;
   let tipo = txtTipo.value;
   let fecha = txtFecha.value;
   let horario_inicio = txtHorarioInicio.value;
   let horario_final = txtHorarioFinal.value;
   let ciudad = txtCiudad.value;
   let direccion = txtDireccion.value;
   let organizador = txtOrganizador.value;
   let cantidad_invitados = txtCantidadInvitados.value;
   let fecha_limite = txtFechaLimite.value;
   let precio_boleto = txtPrecioBoleto.value;
   let costo_extra = txtCostoExtra.value;
   let publico_privado = txtPublicoPrivado.value;
   let descripcion = txtDescripcion.value;

   const imagen = document.getElementById("img").files[0];

   const { error } = await supabase
      .from('eventos')
      .update({ nombre, tipo, fecha, horario_inicio, horario_final, ciudad, direccion, organizador, cantidad_invitados, fecha_limite, precio_boleto, costo_extra, publico_privado, descripcion })
      .eq('id_eventos', idEvento)

   if (imagen) {
      console.log("Imagen lleno");
      const { data, error } = await supabase
         .storage
         .from('imagen-evento')
         .update('evento '+idEvento, imagen, {
            cacheControl: '3600',
            upsert: true
         })
   }

   if (error) {
      alert('Registro evento incorrecto')
      console.log(error);
   } else {
      alert('Registro evento correcto');
   }

}