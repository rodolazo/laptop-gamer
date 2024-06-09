const precio = 400000;
let precioFinal = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const botonSumar = document.querySelector(".suma");
const botonResta = document.querySelector(".resta");
const elementoPagar = document.querySelector(".valor-total");
const elementoCantidad = document.querySelector(".cantidad");

botonSumar.addEventListener("click", calcularValores);
botonResta.addEventListener("click", calcularValores);

function calcularValores(evt) {
  if (!calcularValores.contador) {
    calcularValores.contador = 0;
  }
  if (evt.target.classList.contains("suma")) {
    calcularValores.contador += 1;
  } else if (
    evt.target.classList.contains("resta") &&
    calcularValores.contador > 0
  ) {
    calcularValores.contador -= 1;
  }
  precioFinal = calcularValores.contador * precio;
  mostrarValores();
}

const mostrarValores = () => {
  elementoPagar.innerHTML = precioFinal;
  elementoCantidad.innerHTML = calcularValores.contador;
};
