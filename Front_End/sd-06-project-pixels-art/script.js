let corSelecionada = 'black';

function divSelected(cor, div) {
  corSelecionada = cor;
  const divSelecionada = document.getElementsByClassName('selected')[0];
  divSelecionada.classList.remove('selected');
  div.classList.add('selected');
}

const idBlack = document.getElementById('black');
idBlack.addEventListener('click', function () {
  divSelected('black', idBlack);
});

const idRed = document.getElementById('red');
idRed.addEventListener('click', function () {
  divSelected('red', idRed);
});

const idBlue = document.getElementById('blue');
idBlue.addEventListener('click', function () {
  divSelected('blue', idBlue);
});

const idGreen = document.getElementById('green');
idGreen.addEventListener('click', function () {
  divSelected('green', idGreen);
});

function corDefinida(pixel) {
  pixel.addEventListener('click', function () {
    pixel.style.backgroundColor = corSelecionada;
  });
}

const arrayPixel = document.getElementsByClassName('pixel');
for (let i = 0; i < arrayPixel.length; i += 1) {
  corDefinida(arrayPixel[i]);
}

const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', function () {
  for (let i = 0; i < arrayPixel.length; i += 1) {
    arrayPixel[i].style.backgroundColor = 'white';
  }
});
