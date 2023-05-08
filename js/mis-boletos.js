import { supabase } from "./conexion.js"

let { data: { user } } = await supabase.auth.getUser()

let correo = user.email;

let { data, error } = await supabase
    .from('boletos')
    .select(`count`)
    .eq('correo', correo)

let limite = data[0].count;

({ data, error } = await supabase
    .from('boletos')
    .select()
    .eq('correo', correo))

let nombreURL = [];

for (let index = 0; index < limite; index++) {
    nombreURL.push("evento " + data[index].id_evento);
}

let imgURL = [];

for (let index = 0; index < limite; index++) {
    ({ data, error } = await supabase
        .storage
        .from('imagen-evento')
        .createSignedUrl(nombreURL[index], 600000))

    imgURL.push(data.signedUrl);
}

({ data, error } = await supabase
    .from('boletos')
    .select()
    .eq('correo', correo))

for (let index = 0; index < limite; index++) {
    sessionStorage.setItem("boleto " + index, data[index].id_boleto);

    // Crear el div
    const div = document.createElement('div');
    div.style.border = '1rem solid goldenrod';

    // Crear la imagen
    const img = document.createElement('img');
    img.src = imgURL[index];
    img.alt = 'Imagen de evento';
    img.style.maxWidth = '250px';
    div.appendChild(img);

    // Crear el separador horizontal
    const hr = document.createElement('hr');
    div.appendChild(hr);

    // Crear los elementos de texto
    const idEvento = document.createElement('p');
    idEvento.id = 'idBoleto';
    idEvento.textContent = 'Id boleto: '+data[0].id_boleto;
    div.appendChild(idEvento);

    const nombreEvento = document.createElement('p');
    nombreEvento.id = 'nombreEvento';
    nombreEvento.textContent = 'nombre evento: '+ data[0].nombre_evento;
    div.appendChild(nombreEvento);

    const fechaEvento = document.createElement('p');
    fechaEvento.id = 'fechaEvento';
    fechaEvento.textContent = 'fecha evento: '+data[0].fecha_evento;
    div.appendChild(fechaEvento);

    const ciudadEvento = document.createElement('p');
    ciudadEvento.id = 'ciudadEvento';
    ciudadEvento.textContent = 'ciudad: '+data[0].ciudad;
    div.appendChild(ciudadEvento);

    const direccionEvento = document.createElement('p');
    direccionEvento.id = 'direccionEvento';
    direccionEvento.textContent = 'direccion: '+data[0].direccion;
    div.appendChild(direccionEvento);

    // Crear el enlace y el botón
    const a = document.createElement('a');
    a.href = '/comp/boleto.html';

    const button = document.createElement('button');
    button.id = "boleto " + index;
    button.textContent = 'Ver boleto';

    a.appendChild(button);
    div.appendChild(a);

    // Agregar el div al contenedor
    const contenedor = document.getElementById('contenedor');
    contenedor.appendChild(div);
}

function imprimirId(event) {
    let id = event.target.id;
    sessionStorage.setItem('datoBotonBoleto', id);
}

const enlaces = document.querySelectorAll("a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", imprimirId);
});
