import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");

const idEvento = sessionStorage.getItem(datoBoton);

const btnDesplegarEvento = document.getElementById("desplegarEvento");

btnDesplegarEvento.addEventListener('click', desplegar)

let { data, error } = await supabase
      .from('eventos')
      .select('nombre')
      .eq('id_eventos', idEvento)

let nombreImg = data[0].nombre;

async function desplegar() {

   const { error } = await supabase
      .from('eventos')
      .update({ estado: 'desplegado' })
      .eq('id_eventos', idEvento)

   if (error) {
      alert(error);
   }

}

const btnEliminarEvento = document.getElementById("eliminarEvento");

btnEliminarEvento.addEventListener('click', eliminar)

async function eliminar() {

   let { error } = await supabase
      .from('eventos')
      .delete()
      .eq('id_eventos', idEvento)

   if (error) {
      alert(error);
   }

   let { data, error2 } = await supabase
      .storage
      .from('imagen-evento')
      .remove(nombreImg)

}