import { supabase } from "./conexion.js"

let { data: { user } } = await supabase.auth.getUser()

let { data, error } = await supabase
    .from('eventos')
    .select(`count`)
    .eq('id_usuario_auth', user.id)

let limite = data[0].count;

({ data, error } = await supabase
    .from('eventos')
    .select('id_eventos')
    .eq('id_usuario_auth', user.id))

let nombreURL = [];

for (let index = 0; index < limite; index++) {
    nombreURL.push("evento "+data[index].id_eventos);
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
    .from('eventos')
    .select()
    .eq('id_usuario_auth', user.id))

for (let index = 0; index < limite; index++) {

    sessionStorage.setItem("evento " + index, data[index].id_eventos);

    // Crear el div con las clases "col-12 col-md-4"
    const div = document.createElement('div');
    div.classList.add('col-12', 'col-md-4');

    // Crear el div con las clases "card card-img-height" y el estilo inline
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('card', 'card-img-height');
    innerDiv.style.width = '18rem';

    // Crear la imagen
    const img = document.createElement('img');
    img.src = imgURL[index];
    img.classList.add('card-img-top');
    img.alt = 'imagen-evento';
    innerDiv.appendChild(img);

    // Crear el div con la clase "card-body"
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    // Crear el título h5
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = data[index].nombre;
    cardBodyDiv.appendChild(cardTitle);

    // Crear la lista ul con la clase "list-group list-group-flush"
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');

    // Crear los elementos de la lista li
    const fechaLi = document.createElement('li');
    fechaLi.classList.add('list-group-item');
    fechaLi.textContent = 'Fecha: '+data[index].fecha;
    ul.appendChild(fechaLi);

    const entradaLi = document.createElement('li');
    entradaLi.classList.add('list-group-item');
    entradaLi.textContent = 'Entrada: '+data[index].precio_boleto;
    ul.appendChild(entradaLi);

    const estadoLi = document.createElement('li');
    estadoLi.classList.add('list-group-item');
    estadoLi.textContent = 'Estado: '+data[index].estado;
    ul.appendChild(estadoLi);

    const tipoEventoLi = document.createElement('li');
    tipoEventoLi.classList.add('list-group-item');
    tipoEventoLi.textContent = 'Tipo de evento: '+data[index].tipo;
    ul.appendChild(tipoEventoLi);

    // Agregar la lista ul al div con la clase "card-body"
    cardBodyDiv.appendChild(ul);

    // Crear el enlace a con la clase "btn btn-primary" y el id "evento"
    const a = document.createElement('a');
    a.href = "https://ticketerouv.000webhostapp.com/views/admin/AdministrarEvento.html";
    a.classList.add('btn', 'btn-primary');
    a.id = 'evento '+ index;
    a.textContent = 'Ver Evento';

    // Agregar el enlace a al div con la clase "card-body"
    cardBodyDiv.appendChild(a);

    // Agregar el div con la clase "card-body" al div con las clases "card card-img-height"
    innerDiv.appendChild(cardBodyDiv);

    // Agregar el div con las clases "card card-img-height" al div con las clases "col-12 col-md-4"
    div.appendChild(innerDiv);

    // Agregar el div al contenedor
    const contenedor = document.getElementById('contenedor');
    contenedor.appendChild(div);

}

function imprimirId(event) {
    let id = event.target.id;
    sessionStorage.setItem('datoBotonEvento', id);
}

const enlaces = document.querySelectorAll("a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", imprimirId);
});

