import { drawKeyboardRu } from './drawKeyboardRu.js';

const { body } = document;

function layout() {
  const container = document.createElement('div');
  container.classList.add('container');
  body.appendChild(container);

  container.innerHTML = `
  <h1 class="keyboard__title"></h1>
  <textarea class=container__textarea></textarea>
  <div class="keyboard"></div>
  <p class="description"></p>
  <p class="change__lang"></p>
  `;

  document.querySelector('.keyboard__title').innerText = 'RSS Виртуальная клавиатура';

  document.querySelector('.description').innerText = 'Клавиатура создана в операционной системе Windows';

  document.querySelector('.change__lang').innerText = 'Для переключения языка комбинация:левыe shift + ctrl';
}

layout();

drawKeyboardRu();

function removeActiveButton() {
  document.querySelectorAll('.keyboard__key').forEach((el) => {
    el.classList.remove('active');
  });
}

function activeButton() {
  const textarea = document.querySelector('.container__textarea');

  document.addEventListener('keypress', (event) => {
    document.querySelectorAll('.keyboard__key').forEach((el) => {
      el.classList.remove('active');
    });
    textarea.focus();
    document.querySelector(`[data=${event.code}]`).classList.add('active');
    setTimeout(removeActiveButton, 300);
  });
  document.querySelectorAll('.keyboard__key').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.keyboard__key').forEach((el) => {
        el.classList.remove('active');
      });
      textarea.focus();
      e.target.classList.add('active');
      textarea.value += e.target.innerText;
      setTimeout(removeActiveButton, 300);
    });
  });
}

activeButton();
