import { supabase } from "./conexion.js"

const btnCerrar = document.getElementById("cerrarSesion");

btnCerrar.addEventListener('click', cerrarSesion)

async function cerrarSesion() {

   const { data: { user } } = await supabase.auth.getUser()

   console.log(user.id);
}