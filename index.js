import { keyLetters } from './keyLetters.js';

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

export function drawKeyboard() {
  let draw = '';
  let lang;

  function changeLang() {
    lang = localStorage.getItem('lang') || 'eng';
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ShiftLeft' && event.code === 'ControlLeft') {
        lang = lang === 'eng' ? 'lit' : 'eng';
        localStorage.setItem('lang', lang);
        console.log(localStorage);
      }
    });
  }

  changeLang();
  for (let i = 0; i < keyLetters.length; i += 1) {
    draw += `<div class = "keyboard__key" data = ${keyLetters[i][0]} >
    ${keyLetters[i][1]}</div>`;
  }

  document.querySelector('.keyboard').innerHTML = draw;

  //   const keyboard = document.querySelectorAll('.keyboard__key');

  //  for (let i = 0; i < keyboard.length; i += 1) {
  //    keyboard[i].innerText = `${keyletters[i][2]}`;
  //  }

  const controlLeft = document.querySelector('[data="ControlLeft"]');
  controlLeft.classList.add('special__ctrl-left');

  const ControlRight = document.querySelector('[data="ControlRight"]');
  ControlRight.classList.add('special__ctrl-right');

  const altLeft = document.querySelector('[data="AltLeft"]');
  altLeft.classList.add('special__alt-left');

  const altRight = document.querySelector('[data="AltRight"]');
  altRight.classList.add('special__alt-right');

  const shiftLeft = document.querySelector('[data="ShiftLeft"]');
  shiftLeft.classList.add('special__shift-left');

  const shiftRight = document.querySelector('[data="ShiftRight"]');
  shiftRight.classList.add('special__shift-right');

  const win = document.querySelector('[data="Win"]');
  win.classList.add('special__win');

  const enter = document.querySelector('[data="Enter"]');
  enter.classList.add('special__enter');

  const tab = document.querySelector('[data="Tab"]');
  tab.classList.add('special__tab');

  const backspase = document.querySelector('[data="Backspace"]');
  backspase.classList.add('special__backspase');

  const capsLock = document.querySelector('[data="CapsLock"]');
  capsLock.classList.add('special__caps');

  const del = document.querySelector('[data="Del"]');
  del.classList.add('special__del');

  const space = document.querySelector('[data="Space"]');
  space.classList.add('special__space');

  const arrowUp = document.querySelector('[data="ArrowUp"]');
  arrowUp.classList.add('special__arrow-up');

  const arrowleft = document.querySelector('[data="ArrowLeft"]');
  arrowleft.classList.add('special__arrow-left');

  const arrowRight = document.querySelector('[data="ArrowRight"]');
  arrowRight.classList.add('special__arrow-right');

  const arrowDown = document.querySelector('[data="ArrowDown"]');
  arrowDown.classList.add('special__arrow-down');
}

drawKeyboard();

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
  /// ///click/////
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

  // let capsKey = false;
  // document.addEventListener('keydown', (event) => {
  //   event.preventDefault();
  //   textarea.focus();
  //   document.querySelectorAll('.keyboard__key').forEach((el, i) => {
  //     if (event.getModifierState('CapsLock')) {
  //       capsKey = true;
  //       console.log(capsKey);
  //       document
  //         .querySelector('.special__caps')
  //         .classList.add('special__active');
  //     } else {
  //       textarea.focus();
  //       el.classList.add('active');
  //       textarea.value += el.innerText;
  //       setTimeout(removeActiveButton, 300);
  //     }
  //   });
  // });
}

activeButton();
