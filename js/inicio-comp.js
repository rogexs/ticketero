import { supabase } from "./conexion.js"

const txtCorreo = document.getElementById("correo-comp");
const txtContra = document.getElementById("contra-comp");
const btnIniciar = document.getElementById("iniciar-comp");

btnIniciar.addEventListener('click', iniciarSesion)

async function iniciarSesion() {
    let correo = txtCorreo.value;
    let contra = txtContra.value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: correo,
        password: contra,
        
    })
     if (error) {
        console.log(error);
        alert('Inicio de sesion incorrecto')
     }else{
        window.location.href = '/views/comprador/comprador-home.html';
     }
}