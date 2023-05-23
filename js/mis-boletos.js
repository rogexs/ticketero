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
    img.classList.add('card-img-top', 'img-fluid');
    img.alt = 'Imagen evento';
    innerDiv.appendChild(img);

    // Crear el div con la clase "card-body"
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    // Crear el título h5
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = 'ID Boleto: '+data[index].id_boleto;
    cardBodyDiv.appendChild(cardTitle);

    // Crear la lista ul con la clase "list-group list-group-flush"
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');

    // Crear los elementos de la lista li
    const nombreLi = document.createElement('li');
    nombreLi.classList.add('list-group-item');
    nombreLi.textContent = 'Nombre: '+ data[index].nombre_evento;
    ul.appendChild(nombreLi);

    const fechaLi = document.createElement('li');
    fechaLi.classList.add('list-group-item');
    fechaLi.textContent = 'Fecha: '+data[index].fecha_evento;
    ul.appendChild(fechaLi);

    const ciudadLi = document.createElement('li');
    ciudadLi.classList.add('list-group-item');
    ciudadLi.textContent = 'Ciudad: '+data[index].ciudad;
    ul.appendChild(ciudadLi);

    const direccionLi = document.createElement('li');
    direccionLi.classList.add('list-group-item');
    direccionLi.textContent = 'Dirección: '+data[index].direccion;
    ul.appendChild(direccionLi);

    // Agregar la lista ul al div con la clase "card-body"
    cardBodyDiv.appendChild(ul);

    // Crear el enlace a con la clase "btn btn-primary btn-sm" y el id "evento 0"
    const a = document.createElement('a');
    a.href = '/views/comprador/miBoleto.html';
    a.classList.add('btn', 'btn-primary', 'btn-sm');
    a.id = "boleto " + index;
    a.textContent = 'Ver mi boleto';

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
    sessionStorage.setItem('datoBotonBoleto', id);
}

const enlaces = document.querySelectorAll("a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", imprimirId);
});

