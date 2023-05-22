import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");

const idEvento = sessionStorage.getItem(datoBoton);

let { data, error } = await supabase
      .from('eventos')
      .select('nombre')
      .eq('id_eventos', idEvento)

let nombreImg = data[0].nombre;

const btnDesplegarEvento = document.getElementById("desplegarEvento");

btnDesplegarEvento.addEventListener('click', desplegar)

async function desplegar() {

   const { error } = await supabase
      .from('eventos')
      .update({ estado: 'desplegado' })
      .eq('id_eventos', idEvento)
      window.location.href = '/views/admin/Admin-home.html'
   if (error) {
      console.log(error);
      alert("Error de despliegue")
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
      console.log(error);
      alert("Error de eliminar")
   } else {
      let { data, error2 } = await supabase
         .storage
         .from('imagen-evento')
         .remove(nombreImg)
         window.location.href = '/views/admin/Admin-home.html';
   }
}