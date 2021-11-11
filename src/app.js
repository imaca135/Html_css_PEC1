
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

document.addEventListener('DOMContentLoaded', function () {
 
 let w = window,
     d=document,
     e=d.documentElement,
     g=d.getElementsByTagName('body')[0],
     x=w.innerWidth||e.clientWidth||g.clientWidth,
     y=w.innerHeight||e.clientHeight||g.clientHeight;
 
 let img = document.getElementById('img-portada');

 if(img !== null){
  img.style.height=`${y}px`;
 }
}, false);

