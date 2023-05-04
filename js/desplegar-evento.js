import { supabase } from "./conexion.js"

const datoBoton = sessionStorage.getItem("datoBotonEvento");

const idEvento = sessionStorage.getItem(datoBoton);

console.log(idEvento);

const btnDesplegarEvento = document.getElementById("desplegarEvento");

btnDesplegarEvento.addEventListener('click', desplegar)

async function desplegar() {

   alert("Desplegado");
}