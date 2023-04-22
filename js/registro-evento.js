import { supabase } from "./conexion.js"

const txtNombre = document.getElementById("nombre");

const btnRegistrar = document.getElementById("registrar");

btnRegistrar.addEventListener('click', registrarEvento)

async function registrarEvento() {
   let nombre = txtNombre.value;

   const { error } = await supabase
      .from('eventos')
      .insert({ nombre })

   if (error) {
      alert('Registro evento incorrecto')
   } else {
      alert('Registro evento correcto');
   }
}