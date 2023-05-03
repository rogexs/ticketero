import { supabase } from "./conexion.js"

const btnAccion = document.getElementById("accion");

btnAccion.addEventListener('click', accionFuncion)

async function accionFuncion() {
    const imagen = document.getElementById("img").files[0];
    console.log(imagen);

    const { data, error } = await supabase
        .storage
        .from('imagen-evento')
        .upload('avatar1', imagen, {
            cacheControl: '3600',
            upsert: false
        })

    if (error) {
        console.log("Algo salio mal");
    } else {
        console.log("Todo bien");
    }   

}

/*Metodo para obtener link de imagen

async function accionFuncion() {

    const { data, error } = await supabase
        .storage
        .from('imagen-evento')
        .createSignedUrl('40', 600000)

    console.log(data.signedUrl);
    console.log(error);
}
*/