const btnAunmentar = document.querySelector('.btn-Aumentar');
const btnDisminuir = document.querySelector('.btn-Disminuir');
const btnRecetear = document.querySelector('.btn-Recetear');
const body = document.querySelector('body');
const numero = document.querySelector('.numero');
let contador = 0;

btnAunmentar.addEventListener('click', () => {
  console.log('Me diste click Aumentar');
  contador++;
  numero.textContent = contador;
});

body.addEventListener('keyup', (a) => {
  if (a.keyCode === 67) {
    contador++;
    console.log('precionaste la tecla C para Aumentar');
    numero.textContent = contador;
  }
});

btnDisminuir.addEventListener('click', () => {
  console.log('Me diste click Disminuir');
  if (contador > 0) {
    contador--;
  }
  numero.textContent = contador;
});

body.addEventListener('keyup', (a) => {
  if (a.keyCode === 65) {
    console.log('precionaste la tecla A para Disminuir');
    if (contador > 0) {
      contador--;
    }
  }
  numero.textContent = contador;
});

btnRecetear.addEventListener('click', () => {
  console.log('Me receteaste');
  contador = 0;
  numero.textContent = contador;
});
