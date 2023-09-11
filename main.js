document.addEventListener("DOMContentLoaded", function() {
const serviciosDisponibles = [
  { nombre: "Tarot", precio: 35 },
  { nombre: "Reiki", precio: 45 },
  { nombre: "Revolución Solar", precio: 60 },
  { nombre: "Carta Astral", precio: 70 },
  { nombre: "Terapia Holística", precio: 75 }];

const carrito = [];

const tipoServicioSelect = document.getElementById("tipoServicio");
const agregarCarritoButton = document.getElementById("agregarCarrito");      
const borrarCarritoButton = document.getElementById("borrarCarrito");      
const verCarritoButton = document.getElementById("verCarrito");
       
const buscarServicioPorNombre = nombre => {
  return serviciosDisponibles.find(
  servicio => servicio.nombre.toLowerCase() === nombre.toLowerCase());};

const agregarServicioAlCarrito = nombre => {
  const servicio = buscarServicioPorNombre(nombre);
  if (servicio) {
    carrito.push(servicio);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  
    return servicio;} 
    else {
    return null;}};
  
agregarCarritoButton.addEventListener("click", () => {
  const selectedService = tipoServicioSelect.value;
  const servicioAgregado = agregarServicioAlCarrito(selectedService);
    if (servicioAgregado) {
      Toastify({
        text: `Servicio de ${servicioAgregado.nombre} agregado al carrito.`,
        duration: 3000, 
        gravity: "top", 
        position: "right",
      }).showToast();} 
    else {
      Toastify({
        text: "Servicio no encontrado.",
        duration: 3000,
        gravity: "top",
        position: "right",
      }).showToast();}});

const obtenerMensajeCarrito = () => {
  if (carrito.length === 0) {
    return "El carrito está vacío.";}
      let mensaje = "Servicios en el carrito:\n";
      carrito.forEach(servicio => {
      mensaje += `${servicio.nombre}: $${servicio.precio}\n`;});
    return mensaje;};

borrarCarritoButton.addEventListener("click", () => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Deseas borrar todos los servicios del carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
    }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("carrito");
        carrito.length = 0;
        carritoDiv.innerHTML = "";
        Toastify({
          text: "El carrito ha sido borrado.",
          duration: 3000,
          gravity: "top",
          position: "right",
        }).showToast();}});});

const calcularTotalCarrito = () => {
  return carrito.reduce((total, servicio) => total + servicio.precio, 0);
};

const aplicarDescuento = () => {
  return new Promise((resolve, reject) => {
    const total = calcularTotalCarrito();
  if (total > 150) {
    const descuento = total * 0.1;
    const nuevoTotal = total - descuento;
    resolve(nuevoTotal);} 
  else {
    resolve(total);}});};

verCarritoButton.addEventListener("click", async () => {
  const totalConDescuento = await aplicarDescuento();
  const mensajeCarrito = carrito.length > 0 ? obtenerMensajeCarrito() : "El carrito está vacío.";
  let mensajeDescuento = "";

  if (totalConDescuento !== calcularTotalCarrito()) {
    mensajeDescuento = "¡Su compra es mayor a $150! Se aplicará un 10% de descuento.";
  }
  Swal.fire({
    title: "Carrito de Compras",
    html: `${mensajeCarrito}<br><b>Total: $${totalConDescuento.toFixed(2)}</b><br>${mensajeDescuento}`,
    icon: "success",
    confirmButtonText: "Cerrar",});});

  const listaPreciosDiv = document.getElementById("listaPrecios"); 
serviciosDisponibles.forEach(servicio => {
  const servicioElement = document.createElement("p");
  servicioElement.textContent = `${servicio.nombre}: $${servicio.precio}`;
  listaPreciosDiv.appendChild(servicioElement);});

const carritoDiv = document.getElementById("carrito");});

const carritoEnlocalStorage = localStorage.getItem("carrito");
if (carritoEnlocalStorage) {
  carrito.push(...JSON.parse(carritoEnlocalStorage));}

