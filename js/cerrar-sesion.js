import { supabase } from "./conexion.js"

const btnCerrar = document.getElementById("cerrarSesion");

btnCerrar.addEventListener('click', cerrarSesion)

async function cerrarSesion() {

   const { error } = await supabase.auth.signOut()

   if (error) {
      alert('Cierre de sesion incorrecto')
   } else {
      alert('Cierre de sesion correcto');
      window.location.href = '/index.html';
   }
}