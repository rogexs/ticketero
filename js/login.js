import { supabase } from "./conexion.js"

const txtCorreo = document.getElementById("email");
const txtNombre = document.getElementById("nombre");
const txtApellido = document.getElementById("apellido");
const txtContra = document.getElementById("contra");
const txtContraCon = document.getElementById("con-contra");
const btnRegistrar = document.getElementById("registrar");

btnRegistrar.addEventListener('click', registrar, function (event) {
    event.preventDefault();
});


async function registrar() {
    let supaCorreo = txtCorreo.value;
    let supaNombre = txtNombre.value;
    let supaApellido = txtApellido.value;
    let supaContra = txtContra.value;
    let supaConContra = txtContraCon.value;

    if (supaContra == supaConContra && supaConContra.length > 0) {

        const { error2 } = await supabase
            .from('usuario')
            .insert([{ correo: supaCorreo, nombre: supaNombre, apellido: supaApellido, contra: supaContra }])

        alert('aiuda');
    } else {
        alert('error');
    }

}