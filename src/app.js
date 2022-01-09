
// Meter jquery para el slider pro
import("jquery").then(async (jquery) => {
  $ = window.$ = window.jQuery = jquery
  await import('slider-pro')
  $(document).ready(function() {
    $('#my-slider').sliderPro();
  })
});


// Menú hamburguesa
var menu = document.querySelector('.hamburger');
console.log(menu);

function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// Hacer que la imagen de portada ocupe el 100% de la pantalla
menu.addEventListener('click', toggleMenu, false);

