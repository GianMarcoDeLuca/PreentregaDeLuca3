
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

while (true) {
  let tipoServicio = prompt("Ingrese el tipo de servicio que desea agregar al carrito (o escriba 'listo' para finalizar):");
  if (tipoServicio.toLowerCase() === 'listo') {
    break;
  }
  let mensaje = agregarServicioAlCarrito(tipoServicio);
  alert(mensaje);
}

let mensajeCarrito = mostrarCarrito();
alert(mensajeCarrito);

