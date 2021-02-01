let cuentaTotal = 0;

let productos = [
  {nombre: 'tacoNormal', precio: 14, cantidad: 0, subtotal: 0},
  {nombre: 'tacoEspecial', precio: 16, cantidad: 0, subtotal: 0},
  {nombre: 'ConsomeMedio', precio: 60, cantidad: 0, subtotal: 0},
  {nombre: 'Refrescos', precio: 18, cantidad: 0, subtotal: 0},
  {nombre: 'Aguas', precio: 15, cantidad: 0, subtotal: 0},
  {nombre: 'Caldo10', precio: 10, cantidad: 0, subtotal: 0},
]

let productosImpresiones = document.querySelectorAll('.cantidad');

let cuentaTotalImpresion = document.getElementById('total');

let disminuirBotones = document.querySelectorAll('.disminuir-btn');
let aumentarBotones = document.querySelectorAll('.aumentar-btn');
let reset = document.querySelector('#reset-btn');

function aumentarCantidad(posicion) {
  var cantidad = parseInt(productosImpresiones[posicion].value, 10);
  cantidad = isNaN(cantidad) ? 0 : cantidad;
  cantidad++;
  calcularSubtotal(cantidad, posicion);
  imprimirTotal();
}

function disminuirCantidad(posicion) {
  var cantidad = parseInt(productosImpresiones[posicion].value, 10);
  cantidad = isNaN(cantidad) ? 0 : cantidad;
  cantidad < 1 ? cantidad = 1 : '';
  cantidad--;
  calcularSubtotal(cantidad, posicion);
  imprimirTotal();
}

function actualizarValor(posicion) {
  var cantidad = parseInt(productosImpresiones[posicion].value, 10);
  calcularSubtotal(cantidad, posicion);
  imprimirTotal();
}

function calcularSubtotal(cantidad, i) {
  productos[i]['cantidad'] = cantidad;
  productosImpresiones[i].value = productos[i]['cantidad'];
  productos[i]['subtotal'] = cantidad * productos[i]['precio'];
}

function imprimirTotal() {
  for (let i = 0; i < productos.length; i++) {
    cuentaTotal = cuentaTotal + productos[i]['subtotal'];
  }
  /* for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
  }
  for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]['nombre'] + ': $' + productos[i]['subtotal']);
  }
  console.log('total: $' + cuentaTotal); */
  cuentaTotalImpresion.innerHTML = `${cuentaTotal}`;
  cuentaTotal = 0;
}

for ( let i = 0; i < productosImpresiones.length; i++) {
  productosImpresiones[i].addEventListener('change', () => {
    actualizarValor(i);
  });
}

for ( let i = 0; i < disminuirBotones.length; i++) {
  disminuirBotones[i].addEventListener('click', () => {
    disminuirCantidad(i);
  })
}

for ( let i = 0; i < aumentarBotones.length; i++) {
  aumentarBotones[i].addEventListener('click', () => {
    aumentarCantidad(i);
  })
}

reset.addEventListener('click', () => {
  for (let i = 0; i < productos.length; i++) {
    productos[i]['cantidad'] = 0;
    productos[i]['subtotal'] = 0;
    productosImpresiones[i].value = 0;
  }
  cuentaTotalImpresion.innerHTML = 0;
  cuentaTotal = 0;
})