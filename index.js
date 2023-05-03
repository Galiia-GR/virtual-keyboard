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

  document.querySelector('.change__lang').innerText = 'Для переключения языка:Ru';

  document.querySelector('.container__textarea').autofocus = true;
}

layout();

function drawKeyboard() {
  let draw = '';
  const textarea = document.querySelector('.container__textarea');

  for (let i = 0; i < keyLetters.length; i += 1) {
    draw += `<div class = "keyboard__key" data = ${keyLetters[i][0]} >
    ${keyLetters[i][1]}</div>`;
  }
  document.querySelector('.keyboard').innerHTML = draw;

  const keyboard = document.querySelectorAll('.keyboard__key');

  function addSpecButtons() {
    const controlLeft = document.querySelector('[data="ControlLeft"]');
    controlLeft.classList.add('special__ctrl-left');
    controlLeft.innerText = 'Ctrl';

    const controlRight = document.querySelector('[data="ControlRight"]');
    controlRight.classList.add('special__ctrl-right');
    controlRight.innerText = 'Ctrl';

    const altLeft = document.querySelector('[data="AltLeft"]');
    altLeft.classList.add('special__alt-left');
    altLeft.innerText = 'Alt';

    const altRight = document.querySelector('[data="AltRight"]');
    altRight.classList.add('special__alt-right');
    altRight.innerText = 'Alt';

    const shiftLeft = document.querySelector('[data="ShiftLeft"]');
    shiftLeft.classList.add('special__shift-left');
    shiftLeft.innerText = 'Shift';

    const shiftRight = document.querySelector('[data="ShiftRight"]');
    shiftRight.classList.add('special__shift-right');
    shiftRight.innerText = 'Shift';

    const win = document.querySelector('[data="Win"]');
    win.classList.add('special__win');
    win.innerText = 'Win';

    const enter = document.querySelector('[data="Enter"]');
    enter.classList.add('special__enter');
    enter.innerText = 'Enter';

    const tab = document.querySelector('[data="Tab"]');
    tab.classList.add('special__tab');
    tab.innerText = 'Tab';

    const backspase = document.querySelector('[data="Backspace"]');
    backspase.classList.add('special__backspase');
    backspase.innerText = 'Backspace';

    const capsLock = document.querySelector('[data="CapsLock"]');
    capsLock.classList.add('special__caps');
    capsLock.innerHTML = 'CapsLock';

    const del = document.querySelector('[data="Cap"]');
    del.classList.add('special__del');
    del.innerHTML = 'Del';

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

  addSpecButtons();

  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      document.querySelector('.special__caps').classList.add('special__active');
      for (let i = 0; i < keyboard.length; i += 1) {
        keyboard[i].innerText = `${keyLetters[i][2]}`;
      }
      addSpecButtons();
    } else if (event.code === 'ShiftLeft') {
      document.querySelector('.special__shift-left').classList.add('special__active');
      for (let i = 0; i < keyboard.length; i += 1) {
        keyboard[i].innerText = `${keyLetters[i][2]}`;
      }
    } else if (event.code === 'ShiftRight') {
      document.querySelector('.special__shift-right').classList.add('special__active');
      for (let i = 0; i < keyboard.length; i += 1) {
        keyboard[i].innerText = `${keyLetters[i][2]}`;
      }
    } else if (event.code === 'ControlLeft') {
      document.querySelector('.special__ctrl-left').classList.add('special__active');
    } else if (event.code === 'AltLeft') {
      textarea.focus();
      document.querySelector('.special__alt-left').classList.add('special__active');
    } else if (event.code === 'ControlRight') {
      document.querySelector('.special__ctrl-right').classList.add('special__active');
    } else if (event.code === 'AltRight') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__alt-right').classList.add('special__active');
    } else if (event.code === 'ArrowUp') {
      textarea.focus();
      textarea.value += document.querySelector(`[data=${event.code}]`).innerText;
      document.querySelector('.special__arrow-up').classList.add('special__active');
    } else if (event.code === 'ArrowLeft') {
      event.preventDefault();
      textarea.focus();
      textarea.value += document.querySelector(`[data=${event.code}]`).innerText;
      document.querySelector('.special__arrow-left').classList.add('special__active');
    } else if (event.code === 'ArrowRight') {
      textarea.focus();
      textarea.value += document.querySelector(`[data=${event.code}]`).innerText;
      document.querySelector('.special__arrow-right').classList.add('special__active');
    } else if (event.code === 'ArrowDown') {
      textarea.focus();
      textarea.value += document.querySelector(`[data=${event.code}]`).innerText;
      document.querySelector('.special__arrow-down').classList.add('special__active');
    } else if (event.code === 'Space') {
      document.querySelector('.special__space').classList.add('special__active');
    } else if (event.code === 'Enter') {
      document.querySelector('.special__enter').classList.add('special__active');
    } else if (event.code === 'Tab') {
      event.preventDefault();
      textarea.focus();
      textarea.value += '\t';
      document.querySelector('.special__tab').classList.add('special__active');
    } else if (event.code === 'Backspace') {
      document.querySelector('.special__backspase').classList.add('special__active');
    } else if (event.code === 'Cap') {
      event.preventDefault();
      textarea.focus();
      textarea.value += `${textarea.value.slice(0, 1)}`;
      document.querySelector('.special__del').classList.add('special__active');
    } else if (event.code === 'Win') {
      document.querySelector('.special__win').classList.add('special__active');
      event.preventDefault();
      textarea.focus();
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.code === 'CapsLock') {
      document.querySelector('.special__caps').classList.remove('special__active');
      event.preventDefault();
      for (let i = 0; i < keyboard.length; i += 1) {
        keyboard[i].innerText = `${keyLetters[i][1]}`;
      }
      addSpecButtons();
    } else if (event.code === 'ShiftLeft') {
      document.querySelector('.special__shift-left').classList.remove('special__active');
      for (let i = 0; i < keyboard.length; i += 1) {
        keyboard[i].innerText = `${keyLetters[i][1]}`;
      }
    } else if (event.code === 'ShiftRight') {
      document.querySelector('.special__shift-right').classList.remove('special__active');
      for (let i = 0; i < keyboard.length; i += 1) {
        keyboard[i].innerText = `${keyLetters[i][1]}`;
      }
    } else if (event.code === 'ControlLeft') {
      document.querySelector('.special__ctrl-left').classList.remove('special__active');
    } else if (event.code === 'AltLeft') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__alt-left').classList.remove('special__active');
    } else if (event.code === 'ControlRight') {
      document.querySelector('.special__ctrl-right').classList.remove('special__active');
    } else if (event.code === 'AltRight') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__alt-right').classList.remove('special__active');
    } else if (event.code === 'ArrowUp') {
      document.querySelector('.special__arrow-up').classList.remove('special__active');
    } else if (event.code === 'ArrowLeft') {
      document.querySelector('.special__arrow-left').classList.remove('special__active');
    } else if (event.code === 'ArrowRight') {
      document.querySelector('.special__arrow-right').classList.remove('special__active');
    } else if (event.code === 'ArrowDown') {
      document.querySelector('.special__arrow-down').classList.remove('special__active');
    } else if (event.code === 'Space') {
      document.querySelector('.special__space').classList.remove('special__active');
    } else if (event.code === 'Enter') {
      document.querySelector('.special__enter').classList.remove('special__active');
    } else if (event.code === 'Tab') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__tab').classList.remove('special__active');
    } else if (event.code === 'Backspace') {
      document.querySelector('.special__backspase').classList.remove('special__active');
    } else if (event.code === 'Cap') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__del').classList.remove('special__active');
    } else if (event.code === 'Win') {
      document.querySelector('.special__win').classList.remove('special__active');
    }
  });

  keyboard.forEach((el) => {
    el.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (el.classList.contains('special__caps')) {
        document.querySelector('.special__caps').classList.add('special__active-caps');
        for (let i = 0; i < keyboard.length; i += 1) {
          keyboard[i].innerText = `${keyLetters[i][2]}`;
        }
      } else if (el.classList.contains('special__shift-right')) {
        document.querySelector('.special__shift-right').classList.add('special__active');
        for (let i = 0; i < keyboard.length; i += 1) {
          keyboard[i].innerText = `${keyLetters[i][2]}`;
        }
      } else if (el.classList.contains('special__shift-left')) {
        document.querySelector('.special__shift-left').classList.add('special__active');
        for (let i = 0; i < keyboard.length; i += 1) {
          keyboard[i].innerText = `${keyLetters[i][2]}`;
        }
      } else if (el.classList.contains('special__del')) {
        document.querySelector('.special__del').classList.add('special__active');
        for (let i = 0; i < keyboard.length; i += 1) {
          keyboard[i].innerText = `${keyLetters[i][3]}`;
        }
      } else if (el.classList.contains('special__ctrl-left')) {
        document.querySelector('.special__ctrl-left').classList.add('special__active');
        textarea.value += '';
      } else if (el.classList.contains('special__space')) {
        document.querySelector('.special__space').classList.add('special__active');
        textarea.value += ' ';
      } else if (el.classList.contains('special__tab')) {
        document.querySelector('.special__tab').classList.add('special__active');
        event.preventDefault();
        textarea.focus();
        textarea.value += '\t';
      } else if (el.classList.contains('special__enter')) {
        document.querySelector('.special__enter').classList.add('special__active');
        event.preventDefault();
        textarea.focus();
        textarea.value += '\n';
      }
    });
  });

  keyboard.forEach((el) => {
    el.addEventListener('mouseup', (event) => {
      event.preventDefault();
      if (el.classList.contains('special__caps')) {
        document.querySelector('.special__caps').classList.remove('special__active-caps');
        for (let i = 0; i < keyboard.length; i += 1) {
          keyboard[i].innerText = `${keyLetters[i][1]}`;
        }
      } else if (el.classList.contains('special__shift-right')) {
        document.querySelector('.special__shift-right').classList.remove('special__active');
        for (let i = 0; i < keyboard.length; i += 1) {
          keyboard[i].innerText = `${keyLetters[i][1]}`;
        }
      } else if (el.classList.contains('special__shift-left')) {
        document.querySelector('.special__shift-left').classList.remove('special__active');
        for (let i = 0; i < keyboard.length; i += 1) {
          keyboard[i].innerText = `${keyLetters[i][1]}`;
        }
      } else if (el.classList.contains('special__ctrl-left')) {
        document.querySelector('.special__ctrl-left').classList.remove('special__active');
        textarea.value += '';
      } else if (el.classList.contains('special__space')) {
        document.querySelector('.special__space').classList.remove('special__active');
      } else if (el.classList.contains('special__tab')) {
        document.querySelector('.special__tab').classList.remove('special__active');
      } else if (el.classList.contains('special__enter')) {
        document.querySelector('.special__enter').classList.remove('special__active');
      }
    });
  });
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
