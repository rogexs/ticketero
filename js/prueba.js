import { supabase } from "./conexion.js"

console.log("Prueba QR\n");

// Obtén el valor del parámetro "id" desde la URL
function obtenerValorIdDesdeURL() {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get('id');
  }
  
  // Ejemplo de uso
  const idBoleto = obtenerValorIdDesdeURL();
  console.log(idBoleto); // Imprime el valor del parámetro "id" en la consola
  