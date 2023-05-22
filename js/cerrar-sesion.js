import { supabase } from "./conexion.js"

const btnCerrar = document.getElementById("cerrarSesion");

btnCerrar.addEventListener('click', cerrarSesion)

async function cerrarSesion() {

   const { error } = await supabase.auth.signOut()

   if (error) {
      console.log(error);
      alert('Cierre de sesion incorrecto')
   } else {
      window.location.href = '/views/general/home.html';
   }
}