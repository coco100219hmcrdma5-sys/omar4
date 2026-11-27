// Número de Omar Cortés Caudillo
const miNumeroWhatsApp = "525611283343";

const mensaje = "Hola Omar, vi tu página Nosotros y me gustó mucho";

const linkWhatsApp = "https://wa.me/" + miNumeroWhatsApp + "?text=" + encodeURIComponent(mensaje);

// Botón de arriba
document.getElementById("btnWhatsAppTop").addEventListener("click", function() {
  window.open(linkWhatsApp, "_blank");
});

// Botón de abajo
document.getElementById("btnWhatsApp").addEventListener("click", function() {
  window.open(linkWhatsApp, "_blank");
});

console.log("Página Nosotros cargada - Omar Cortés Caudillo");