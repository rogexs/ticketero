import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");
const idEvento = sessionStorage.getItem(datoBoton);

let { data, error } = await supabase
   .from('eventos')
   .select()
   .eq('id_eventos', idEvento)

var fecha = data[0].fecha;
var inicio = data[0].horario_inicio;
var fin = data[0].horario_final;
var ciudad = data[0].ciudad;
var organizador = data[0].organizador;
var fechaLimite = data[0].fecha_limite;
var extraEvento = data[0].costo_extra;
var descripcion = data[0].descripcion;

// Obtener una referencia al párrafo mediante su id
const txtFecha = document.getElementById("fecha");
const txtHorarioInicio = document.getElementById("horarioInicio");
const txtHorarioFinal = document.getElementById("horarioFinal");
const txtCiudad = document.getElementById("ciudad");
const txtOrganizador = document.getElementById("organizador");
const txtFechaLimite = document.getElementById("fecha-limite");
const txtCostoExtra = document.getElementById("costo-extra");
const txtDescripcion = document.getElementById("descripcion");

// Modificar el contenido del párrafo

txtFecha.value = fecha;
txtHorarioInicio.value = inicio;
txtHorarioFinal.value = fin;
txtCiudad.value = ciudad;
txtOrganizador.value = organizador;
txtFechaLimite.value = fechaLimite;
txtCostoExtra.value = extraEvento;
txtDescripcion.value = descripcion;

const btnEditar = document.getElementById("editarEvento");
btnEditar.addEventListener('click', editarEvento)

async function editarEvento() {
   let fecha = txtFecha.value;
   let horario_inicio = txtHorarioInicio.value;
   let horario_final = txtHorarioFinal.value;
   let ciudad = txtCiudad.value;
   let organizador = txtOrganizador.value;
   let fecha_limite = txtFechaLimite.value;
   let costo_extra = txtCostoExtra.value;
   let descripcion = txtDescripcion.value;

   const imagen = document.getElementById("seleccionador-de-imagen").files[0];

   const { error } = await supabase
      .from('eventos')
      .update({fecha, horario_inicio, horario_final, ciudad, organizador, fecha_limite, costo_extra, descripcion })
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
      alert('Edicion incorrecta')
      console.log(error);
   } else {
      alert('Edicion correcta');
      window.location.href = '/views/admin/Admin-home.html';
   }

}