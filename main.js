'use strict';

const inputs = document.querySelectorAll('input');
const shyfr = document.querySelector('.shyfr');
const button = document.querySelector('button');
let x = [];
const gomilka = document.querySelector('.gomilka');
const stegno = document.querySelector('.stegno');

gomilka.addEventListener('click', e => {
  inputs[2].checked = true;
  inputs[2].parentElement.style.opacity = '0%';
  inputs[2].disabled = true;
  inputs[3].disabled = true;
  inputs[3].parentElement.style.opacity = '0%';
});

stegno.addEventListener('click', e => {
  inputs[2].checked = false;
  inputs[2].disabled = false;
  inputs[2].parentElement.style.opacity = '100%';
  inputs[3].disabled = false;
  inputs[3].parentElement.style.opacity = '100%';
});

button.addEventListener('click', e => {
  e.preventDefault();
  x = [];

  for (let i = 0; i < inputs.length; i++) {
    if (x.length === 3) {
      x.push('4');
    }

    if (inputs[i].checked) {
      x.push(inputs[i].value);
    }
  }

  if (x.length === 5) {
    shyfr.innerText = x.join('.');
  } else {
    shyfr.innerText = 'Не всі поля вибрані!';
  }
});
