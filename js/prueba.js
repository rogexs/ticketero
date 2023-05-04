import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");

const idEvento = sessionStorage.getItem(datoBoton);

console.log(idEvento);

const btnEliminarEvento = document.getElementById("eliminarImagen");

btnEliminarEvento.addEventListener('click', eliminar)

async function eliminar() {

        let { data, error } = await supabase
            .storage
            .from('imagen-evento')
            .remove('convencionPrueba')
    
    console.log(data);
    console.log(error);
}