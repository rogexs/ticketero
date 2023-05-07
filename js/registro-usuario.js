import { supabase } from "./conexion.js"

const txtCorreo = document.getElementById("signup-email");
const txtNombre = document.getElementById("signup-name");
const txtApellido = document.getElementById("signup-apellido");
const txtContra = document.getElementById("signup-password");
const txtContraCon = document.getElementById("con-password");
const btnRegistrar = document.getElementById("enviar-boton");

btnRegistrar.addEventListener('click', registrar)

async function registrar() {
  let correo = txtCorreo.value;
  let nombre = txtNombre.value;
  let apellido = txtApellido.value;
  let contra = txtContra.value;
  let conContra = txtContraCon.value;
  let id_usuario_auth;

  if (contra == contra && conContra.length > 0) {

    const { data, error2 } = await supabase.auth.signUp({
      email: correo,
      password: contra,
    })

    id_usuario_auth = data.user.id;

    const { error } = await supabase
      .from('usuarios')
      .insert({ id_usuario_auth, correo, nombre, apellido, contra })

    window.location.href = "/views/general/confirmacion-registro.html";

  } else {
    alert('La contraseña debe ser mayor a 6 caracteres y coincidir su confirmacion');
  }

}