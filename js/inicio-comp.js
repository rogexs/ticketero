import { supabase } from "./conexion.js"

const txtCorreo = document.getElementById("correo");
const txtContra = document.getElementById("contra");
const btnIniciar = document.getElementById("iniciar");

btnIniciar.addEventListener('click', iniciarSesion)

async function iniciarSesion() {
    let correo = txtCorreo.value;
    let contra = txtContra.value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: correo,
        password: contra,
        
    })
     if (error) {
        alert('Inicio de sesion incorrecto')
     }else{
        alert('Inicio correcto');
        window.location.href = '/comp/index-comp.html';
     }
}