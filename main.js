/*
const serviciosDisponibles = [
  { nombre: "Tarot", precio: 35 },
  { nombre: "Reiki", precio: 45 },
  { nombre: "Revolución Solar", precio: 60 },
  { nombre: "Carta Astral", precio: 70 },
  { nombre: "Terapia Holística", precio: 75 }
];

let carrito = [];

const mostrarListaDePrecios = () => {
  let listaPrecios = "Lista de precios de nuestros servicios astrológicos:\n";
  serviciosDisponibles.forEach(servicio => {
    listaPrecios += `${servicio.nombre}: $${servicio.precio}\n`;
  });
  return listaPrecios;
};

const buscarServicioPorNombre = nombre => {
  return serviciosDisponibles.find(servicio => servicio.nombre.toLowerCase() === nombre.toLowerCase());
};

const agregarServicioAlCarrito = nombre => {
  const servicio = buscarServicioPorNombre(nombre);
  if (servicio) {
    carrito.push(servicio);
    return `Servicio de ${servicio.nombre} agregado al carrito.`;
  } else {
    return "Servicio no encontrado.";
  }
};

const mostrarCarrito = () => {
  let mensaje = "Servicios en el carrito:\n";
  carrito.forEach(servicio => {
    mensaje += `${servicio.nombre}: $${servicio.precio}\n`;
  });
  return mensaje;
};

let listaPrecios = mostrarListaDePrecios();
alert(listaPrecios);

let tipoServicio;

while ((tipoServicio = prompt("Ingrese el tipo de servicio que desea agregar al carrito (o escriba 'listo' para finalizar):")).toLowerCase() !== 'listo') {
  let mensaje = agregarServicioAlCarrito(tipoServicio);
  alert(mensaje);
}

let mensajeCarrito = mostrarCarrito();
alert(mensajeCarrito);

*/

document.addEventListener("DOMContentLoaded", function() {
  const serviciosDisponibles = [
    { nombre: "Tarot", precio: 35 },
    { nombre: "Reiki", precio: 45 },
    { nombre: "Revolución Solar", precio: 60 },
    { nombre: "Carta Astral", precio: 70 },
    { nombre: "Terapia Holística", precio: 75 }
  ];

  const carrito = [];

  const body = document.querySelector("body");

  const h1 = document.createElement("h1");
  h1.textContent = "Servicios Astrológicos";
  body.appendChild(h1);

  const listaPreciosDiv = document.createElement("div");
  listaPreciosDiv.id = "listaPrecios";
  body.appendChild(listaPreciosDiv);

  serviciosDisponibles.forEach(servicio => {
    const servicioElement = document.createElement("p");
    servicioElement.textContent = `${servicio.nombre}: $${servicio.precio}`;
    listaPreciosDiv.appendChild(servicioElement);
  });

  const label = document.createElement("label");
  label.textContent = "Seleccione un servicio:";
  label.htmlFor = "tipoServicio";
  body.appendChild(label);

  const select = document.createElement("select");
  select.id = "tipoServicio";
  serviciosDisponibles.forEach(servicio => {
    const option = document.createElement("option");
    option.value = servicio.nombre;
    option.textContent = servicio.nombre;
    select.appendChild(option);
  });
  body.appendChild(select);

  const agregarCarritoButton = document.createElement("button");
  agregarCarritoButton.id = "agregarCarrito";
  agregarCarritoButton.textContent = "Agregar al carrito";
  body.appendChild(agregarCarritoButton);

  const borrarCarritoButton = document.createElement("button");
  borrarCarritoButton.id = "borrarCarrito";
  borrarCarritoButton.textContent = "Borrar carrito";
  body.appendChild(borrarCarritoButton);

  const verCarritoButton = document.createElement("button");
  verCarritoButton.id = "verCarrito";
  verCarritoButton.textContent = "Ver carrito";
  body.appendChild(verCarritoButton);

  const carritoDiv = document.createElement("div");
  carritoDiv.id = "carrito";
  body.appendChild(carritoDiv);

  agregarCarritoButton.addEventListener("click", () => {
    const tipoServicioSelect = document.getElementById("tipoServicio");
    const selectedService = tipoServicioSelect.value;
    const mensaje = agregarServicioAlCarrito(selectedService);
    alert(mensaje);
  });

  borrarCarritoButton.addEventListener("click", () => {
    carrito.length = 0;
    alert("Se ha borrado el carrito.");
    carritoDiv.innerHTML = "";
  });

  verCarritoButton.addEventListener("click", () => {
    const carritoMensaje = carrito.length > 0 ? obtenerMensajeCarrito() : "El carrito está vacío.";
    alert(carritoMensaje);
  });

  const buscarServicioPorNombre = nombre => {
    return serviciosDisponibles.find(
      servicio => servicio.nombre.toLowerCase() === nombre.toLowerCase()
    );
  };

  const agregarServicioAlCarrito = nombre => {
    const servicio = buscarServicioPorNombre(nombre);
    if (servicio) {
      carrito.push(servicio);
      return `Servicio de ${servicio.nombre} agregado al carrito.`;
    } else {
      return "Servicio no encontrado.";
    }
  };

  const obtenerMensajeCarrito = () => {
    let mensaje = "Servicios en el carrito:\n";
    carrito.forEach(servicio => {
      mensaje += `${servicio.nombre}: $${servicio.precio}\n`;
    });
    return mensaje;
  };
});
