import { supabase } from "./conexion.js"

const btnAccion = document.getElementById("accion");

btnAccion.addEventListener('click', accionFuncion)

async function accionFuncion() {

    const { data, error } = await supabase
        .from('eventos')
        .select()
        .eq('id_usuario_auth', 'a35419a1-7ce1-4182-ae46-23168d30d6d6')

    console.log(data[0]);
}