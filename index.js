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

  document.querySelector('.change__lang').innerText = 'Для переключения языка:Ru/Eng';

  document.querySelector('.container__textarea').autofocus = true;
}

layout();

function drawKeyboard() {
  let draw = '';
  let lang;
  const textarea = document.querySelector('.container__textarea');

  function changelangRu() {
    localStorage.setItem(lang, 'Ru');
  }

  function changelangEng() {
    localStorage.setItem(lang, 'Eng');
  }

  async function firstLettersLayout() {
    lang = localStorage.getItem(lang);
    if (lang === 'Ru') {
      for (let i = 0; i < keyLetters.length; i += 1) {
        draw += `<div class = "keyboard__key" data = ${keyLetters[i][0]} >
        ${keyLetters[i][1]}</div>`;
      }
      document.querySelector('.keyboard').innerHTML = draw;
      changelangRu();
    } else {
      for (let i = 0; i < keyLetters.length; i += 1) {
        draw += `<div class = "keyboard__key" data = ${keyLetters[i][0]} >
        ${keyLetters[i][3]}</div>`;
      }
      document.querySelector('.keyboard').innerHTML = draw;
      changelangEng();
    }
  }
  firstLettersLayout();

  function addSpecButtons() {
    const controlLeft = document.querySelector('[data="ControlLeft"]');
    controlLeft.classList.add('special__ctrl-left');
    controlLeft.classList.add('special');
    controlLeft.innerText = 'Ctrl';

    const controlRight = document.querySelector('[data="ControlRight"]');
    controlRight.classList.add('special__ctrl-right');
    controlRight.classList.add('special');
    controlRight.innerText = 'Ctrl';

    const altLeft = document.querySelector('[data="AltLeft"]');
    altLeft.classList.add('special__alt-left');
    altLeft.classList.add('special');
    altLeft.innerText = 'Alt';

    const altRight = document.querySelector('[data="AltRight"]');
    altRight.classList.add('special__alt-right');
    altRight.classList.add('special');
    altRight.innerText = 'Alt';

    const shiftLeft = document.querySelector('[data="ShiftLeft"]');
    shiftLeft.classList.add('special__shift-left');
    shiftLeft.classList.add('special');
    shiftLeft.innerText = 'Shift';

    const shiftRight = document.querySelector('[data="ShiftRight"]');
    shiftRight.classList.add('special__shift-right');
    shiftRight.classList.add('special');
    shiftRight.innerText = 'Shift';

    const win = document.querySelector('[data="Win"]');
    win.classList.add('special__win');
    win.classList.add('special');
    win.innerText = 'Win';

    const enter = document.querySelector('[data="Enter"]');
    enter.classList.add('special__enter');
    enter.classList.add('special');
    enter.innerText = 'Enter';

    const tab = document.querySelector('[data="Tab"]');
    tab.classList.add('special__tab');
    tab.classList.add('special');
    tab.innerText = 'Tab';

    const backspase = document.querySelector('[data="Backspace"]');
    backspase.classList.add('special__backspase');
    backspase.classList.add('special');
    backspase.innerText = 'Backspace';

    const capsLock = document.querySelector('[data="CapsLock"]');
    capsLock.classList.add('special__caps');
    capsLock.classList.add('special');
    capsLock.innerHTML = 'CapsLock';

    const lng = document.querySelector('[data="lng"]');
    lng.classList.add('special__lng');
    lng.classList.add('special');
    lng.innerHTML = 'Ru/Eng';

    const space = document.querySelector('[data="Space"]');
    space.classList.add('special');
    space.classList.add('special__space');

    const arrowUp = document.querySelector('[data="ArrowUp"]');
    arrowUp.classList.add('special');
    arrowUp.classList.add('special__arrow-up');

    const arrowleft = document.querySelector('[data="ArrowLeft"]');
    arrowleft.classList.add('special');
    arrowleft.classList.add('special__arrow-left');

    const arrowRight = document.querySelector('[data="ArrowRight"]');
    arrowRight.classList.add('special');
    arrowRight.classList.add('special__arrow-right');

    const arrowDown = document.querySelector('[data="ArrowDown"]');
    arrowDown.classList.add('special');
    arrowDown.classList.add('special__arrow-down');
  }

  addSpecButtons();
  const keyboard = document.querySelectorAll('.keyboard__key');

  function lettersUp() {
    for (let i = 0; i < keyboard.length; i += 1) {
      keyboard[i].innerText = `${keyboard[i].innerText.toUpperCase()}`;
    }
  }

  function lettersDown() {
    for (let i = 0; i < keyboard.length; i += 1) {
      keyboard[i].innerText = `${keyboard[i].innerText.toLowerCase()}`;
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      document.querySelector('.special__caps').classList.add('active');
      event.preventDefault();
      textarea.focus();
      lettersUp();
      addSpecButtons();
    } else if (event.code === 'ShiftLeft') {
      document.querySelector('.special__shift-left').classList.add('active');
      document.querySelector('.special__shift-left').classList.add('langChange');
      event.preventDefault();
      textarea.focus();
      lettersUp();
      addSpecButtons();
    } else if (event.code === 'ShiftRight') {
      document.querySelector('.special__shift-right').classList.add('active');
      event.preventDefault();
      textarea.focus();
      lettersUp();
      addSpecButtons();
    } else if (event.code === 'ControlLeft') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__shift-left').classList.add('langChange');
      document.querySelector('.special__ctrl-left').classList.add('active');
    } else if (event.code === 'AltLeft') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__alt-left').classList.add('active');
    } else if (event.code === 'ControlRight') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__ctrl-right').classList.add('active');
    } else if (event.code === 'AltRight') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__alt-right').classList.add('active');
    } else if (event.code === 'ArrowUp') {
      event.preventDefault();
      textarea.focus();
      textarea.value += document.querySelector(`[data=${event.code}]`).innerText;
      document.querySelector('.special__arrow-up').classList.add('active');
    } else if (event.code === 'ArrowLeft') {
      event.preventDefault();
      textarea.focus();
      textarea.value += document.querySelector(`[data=${event.code}]`).innerText;
      document.querySelector('.special__arrow-left').classList.add('active');
    } else if (event.code === 'ArrowRight') {
      event.preventDefault();
      textarea.focus();
      textarea.value += document.querySelector(`[data=${event.code}]`).innerText;
      document.querySelector('.special__arrow-right').classList.add('active');
    } else if (event.code === 'ArrowDown') {
      event.preventDefault();
      textarea.focus();
      textarea.value += document.querySelector(`[data=${event.code}]`).innerText;
      document.querySelector('.special__arrow-down').classList.add('active');
    } else if (event.code === 'Space') {
      event.preventDefault();
      textarea.focus();
      textarea.value += ' ';
      document.querySelector('.special__space').classList.add('active');
    } else if (event.code === 'Enter') {
      event.preventDefault();
      textarea.focus();
      textarea.value += '\n';
      document.querySelector('.special__enter').classList.add('active');
    } else if (event.code === 'Tab') {
      event.preventDefault();
      textarea.focus();
      textarea.value += '\t';
      document.querySelector('.special__tab').classList.add('active');
    } else if (event.code === 'Backspace') {
      event.preventDefault();
      textarea.focus();
      textarea.value = textarea.value.replace(/.$/, '');
      document.querySelector('.special__backspase').classList.add('active');
    } else if (event.code === 'Win') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__win').classList.add('active');
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.code === 'CapsLock') {
      document.querySelector('.special__caps').classList.remove('active');
      event.preventDefault();
      textarea.focus();
      lettersDown();
      addSpecButtons();
    } else if (event.code === 'ShiftLeft') {
      document.querySelector('.special__shift-left').classList.remove('active');
      event.preventDefault();
      textarea.focus();
      lettersDown();
      addSpecButtons();
    } else if (event.code === 'ShiftRight') {
      document.querySelector('.special__shift-right').classList.remove('active');
      event.preventDefault();
      textarea.focus();
      lettersDown();
      addSpecButtons();
    } else if (event.code === 'ControlLeft') {
      event.preventDefault();
      textarea.focus();
      addSpecButtons();
      document.querySelector('.special__ctrl-left').classList.remove('active');
    } else if (event.code === 'AltLeft') {
      event.preventDefault();
      textarea.focus();
      addSpecButtons();
      document.querySelector('.special__alt-left').classList.remove('active');
    } else if (event.code === 'ControlRight') {
      event.preventDefault();
      textarea.focus();
      addSpecButtons();
      document.querySelector('.special__ctrl-right').classList.remove('active');
    } else if (event.code === 'AltRight') {
      event.preventDefault();
      textarea.focus();
      addSpecButtons();
      document.querySelector('.special__alt-right').classList.remove('active');
    } else if (event.code === 'ArrowUp') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__arrow-up').classList.remove('active');
    } else if (event.code === 'ArrowLeft') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__arrow-left').classList.remove('active');
    } else if (event.code === 'ArrowRight') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__arrow-right').classList.remove('active');
    } else if (event.code === 'ArrowDown') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__arrow-down').classList.remove('active');
    } else if (event.code === 'Space') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__space').classList.remove('active');
    } else if (event.code === 'Enter') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__enter').classList.remove('active');
    } else if (event.code === 'Tab') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__tab').classList.remove('active');
    } else if (event.code === 'Backspace') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__backspase').classList.remove('active');
    } else if (event.code === 'Win') {
      event.preventDefault();
      textarea.focus();
      document.querySelector('.special__win').classList.remove('active');
    }
  });

  keyboard.forEach((el) => {
    el.addEventListener('mousedown', (event) => {
      if (el.classList.contains('special__caps')) {
        event.preventDefault();
        textarea.focus();
        lettersUp();
        addSpecButtons();
      } else if (el.classList.contains('special__shift-right')) {
        document.querySelector('.special__shift-right').classList.add('active');
        event.preventDefault();
        textarea.focus();
        lettersUp();
        addSpecButtons();
      } else if (el.classList.contains('special__shift-left')) {
        document.querySelector('.special__shift-left').classList.add('active');
        event.preventDefault();
        textarea.focus();
        lettersUp();
        addSpecButtons();
      } else if (el.classList.contains('special__lng')) {
        document.querySelector('.special__lng').classList.add('langChange');
        event.preventDefault();
        changelangRu();
        for (let i = 0; i < keyboard.length; i += 1) {
          keyboard[i].innerText = `${keyLetters[i][1]}`;
        }
        textarea.focus();
        addSpecButtons();
      } else if (el.classList.contains('special__ctrl-left')) {
        event.preventDefault();
        textarea.focus();
        addSpecButtons();
        document.querySelector('.special__ctrl-left').classList.add('active');
      } else if (el.classList.contains('special__ctrl-right')) {
        event.preventDefault();
        textarea.focus();
        addSpecButtons();
        document.querySelector('.special__ctrl-right').classList.add('active');
      } else if (el.classList.contains('special__space')) {
        event.preventDefault();
        textarea.focus();
        textarea.value += ' ';
        document.querySelector('.special__space').classList.add('active');
      } else if (el.classList.contains('special__tab')) {
        event.preventDefault();
        textarea.focus();
        textarea.value += '\t';
        document.querySelector('.special__tab').classList.add('active');
      } else if (el.classList.contains('special__enter')) {
        event.preventDefault();
        textarea.focus();
        textarea.value += '\n';
        document.querySelector('.special__enter').classList.add('active');
      } else if (el.classList.contains('special__alt-left')) {
        event.preventDefault();
        textarea.focus();
        document.querySelector('.special__alt-left').classList.add('active');
      } else if (el.classList.contains('special__alt-right')) {
        event.preventDefault();
        textarea.focus();
        document.querySelector('.special__alt-right').classList.add('active');
      } else if (el.classList.contains('special__backspase')) {
        event.preventDefault();
        textarea.focus();
        textarea.value = textarea.value.replace(/.$/, '');
        document.querySelector('.special__backspase').classList.add('active');
      } else if (el.classList.contains('special__arrow-up')) {
        event.preventDefault();
        textarea.focus();
        textarea.value += document.querySelector('.special__arrow-up').innerText;
        document.querySelector('.special__arrow-up').classList.add('active');
      } else if (el.classList.contains('special__arrow-down')) {
        event.preventDefault();
        textarea.focus();
        textarea.value += document.querySelector('.special__arrow-down').innerText;
        document.querySelector('.special__arrow-down').classList.add('active');
      } else if (el.classList.contains('special__arrow-left')) {
        event.preventDefault();
        textarea.focus();
        textarea.value += document.querySelector('.special__arrow-left').innerText;
        document.querySelector('.special__arrow-left').classList.add('active');
      } else if (el.classList.contains('special__arrow-right')) {
        event.preventDefault();
        textarea.focus();
        textarea.value += document.querySelector('.special__arrow-right').innerText;
        document.querySelector('.special__arrow-right').classList.add('active');
      } else if (el.classList.contains('special__win')) {
        event.preventDefault();
        textarea.focus();
        document.querySelector('.special__win').classList.add('active');
      }
    });
  });

  keyboard.forEach((el) => {
    el.addEventListener('mouseup', (event) => {
      if (el.classList.contains('special__caps')) {
        event.preventDefault();
        textarea.focus();
        lettersDown();
        addSpecButtons();
      } else if (el.classList.contains('special__shift-right')) {
        document.querySelector('.special__shift-right').classList.remove('active');
        event.preventDefault();
        textarea.focus();
        lettersDown();
        addSpecButtons();
      } else if (el.classList.contains('special__shift-left')) {
        document.querySelector('.special__shift-left').classList.remove('active');
        event.preventDefault();
        textarea.focus();
        lettersDown();
        addSpecButtons();
      } else if (el.classList.contains('special__lng')) {
        document.querySelector('.special__lng').classList.remove('langChange');
        event.preventDefault();
        for (let i = 0; i < keyboard.length; i += 1) {
          keyboard[i].innerText = `${keyLetters[i][3]}`;
        }
        textarea.focus();
        changelangEng();
        addSpecButtons();
      }
    });
  });
}

drawKeyboard();

function removeActiveButton() {
  document.querySelectorAll('.keyboard__key').forEach((el) => {
    if (!el.classList.contains('special__caps')) {
      el.classList.remove('active');
    }
  });
}

function activeButton() {
  const textarea = document.querySelector('.container__textarea');

  document.addEventListener('keypress', (event) => {
    document.querySelectorAll('.keyboard__key').forEach((el) => {
      if (!(el.classList.contains('special__caps'))) {
        el.classList.remove('active');
      }
    });
    textarea.focus();
    document.querySelector(`[data=${event.code}]`).classList.add('active');
    setTimeout(removeActiveButton, 300);
  });

  document.querySelectorAll('.keyboard__key').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.keyboard__key').forEach((el) => {
        if (!(el.classList.contains('special__caps'))) {
          el.classList.remove('active');
        }
      });
      textarea.focus();
      e.target.classList.add('active');
      if (e.target.classList.contains('active') && !e.target.classList.contains('special')) {
        textarea.value += e.target.innerText;
      }
      setTimeout(removeActiveButton, 300);
    });
  });
}

activeButton();
