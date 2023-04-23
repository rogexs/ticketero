import { supabase } from "./conexion.js"

const txtCorreo = document.getElementById("correo");
const txtNombre = document.getElementById("nombre");
const txtApellido = document.getElementById("apellido");
const txtContra = document.getElementById("contra");
const txtContraCon = document.getElementById("con-contra");
const btnRegistrar = document.getElementById("registrar");

btnRegistrar.addEventListener('click', registrar)

async function registrar() {
  let correo = txtCorreo.value;
  let nombre = txtNombre.value;
  let apellido = txtApellido.value;
  let contra = txtContra.value;
  let conContra = txtContraCon.value;

  if (contra == contra && conContra.length > 0) {

    const { data, error2 } = await supabase.auth.signUp({
      email: correo,
      password: contra,
    })

    const { error } = await supabase
      .from('usuarios')
      .insert({ correo, nombre, apellido, contra })

    alert('Registro exitoso');

    window.location.href = "registro-realizado.html";

  } else {
    alert('La contraseña debe ser mayor a 6 caracteres y coincidir su confirmacion');
  }

}