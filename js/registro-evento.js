import { supabase } from "./conexion.js"

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

const btnRegistrar = document.getElementById("registrar");

btnRegistrar.addEventListener('click', registrarEvento)

async function registrarEvento() {
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
   let id_usuario_auth;

   const { data: { user } } = await supabase.auth.getUser()
   id_usuario_auth = user.id;

   const { error } = await supabase
      .from('eventos')
      .insert({ id_usuario_auth, nombre, tipo, fecha, horario_inicio, horario_final, ciudad, direccion, organizador, cantidad_invitados, fecha_limite, precio_boleto, costo_extra, publico_privado, descripcion })

   if (error) {
      alert('Registro evento incorrecto')
      console.log(error);
   } else {
      alert('Registro evento correcto');
   }
}