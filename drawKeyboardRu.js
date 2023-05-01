const keyletters = [
  ['Backquote', 'ё', 'Ё', '`', '~'],
  ['Digit1', '1', '!', '1', '!'],
  ['Digit2', '2', '"', '2', '@'],
  ['Digit3', '3', '№', '3', '#'],
  ['Digit4', '4', ';', '4', '$'],
  ['Digit5', '5', '%', '5', '%'],
  ['Digit6', '6', ':', '6', '^'],
  ['Digit7', '7', '?', '7', '&'],
  ['Digit8', '8', '*', '8', '*'],
  ['Digit9', '9', '(', '9', '('],
  ['Digit0', '0', ')', '0', ')'],
  ['Minus', '-', '_', '-', '_'],
  ['Equal', '=', '+', '=', '+'],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
  ['KeyQ', 'й', 'Й', 'q', 'Q'],
  ['KeyW', 'ц', 'Ц', 'w', 'W'],
  ['KeyE', 'у', 'У', 'e', 'E'],
  ['KeyR', 'к', 'К', 'r', 'R'],
  ['KeyT', 'е', 'Е', 't', 'T'],
  ['KeyY', 'н', 'Н', 'y', 'Y'],
  ['KeyU', 'г', 'Г', 'u', 'U'],
  ['KeyI', 'ш', 'Ш', 'i', 'I'],
  ['KeyO', 'щ', 'Щ', 'o', 'O'],
  ['KeyP', 'з', 'З', 'p', 'P'],
  ['BracketLeft', 'х', 'Х', '[', '{'],
  ['BracketRight', 'ъ', 'Ъ', ']', '}'],
  ['Backslash', '\\', '|', '\\', '|'],
  ['Del', 'Del', 'Del', 'Del', 'Del'],
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
  ['KeyA', 'ф', 'Ф', 'a', 'A'],
  ['KeyS', 'ы', 'Ы', 's', 'S'],
  ['KeyD', 'в', 'В', 'd', 'D'],
  ['KeyF', 'а', 'А', 'f', 'F'],
  ['KeyG', 'п', 'П', 'g', 'G'],
  ['KeyH', 'р', 'Р', 'h', 'H'],
  ['KeyJ', 'о', 'О', 'j', 'J'],
  ['KeyK', 'л', 'Л', 'k', 'K'],
  ['KeyL', 'д', 'Д', 'l', 'L'],
  ['Semicolon', 'ж', 'Ж', ';', ':'],
  ['Quote', 'э', 'Э', "'", '"'],
  ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['KeyZ', 'я', 'Я', 'z', 'Z'],
  ['KeyX', 'ч', 'Ч', 'x', 'X'],
  ['KeyC', 'с', 'С', 'c', 'C'],
  ['KeyV', 'м', 'М', 'v', 'V'],
  ['KeyB', 'и', 'И', 'b', 'B'],
  ['KeyN', 'т', 'Т', 'n', 'N'],
  ['KeyM', 'ь', 'Ь', 'm', 'M'],
  ['Comma', 'б', 'Б', ',', '<'],
  ['Dot', 'ю', 'Ю', '.', '>'],
  ['Slash', '.', ',', '/', '?'],
  ['ArrowUp', '▲', '▲', '▲', '▲'],
  ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['ControlLeft', 'ctrl', 'ctrl', 'ctrl', 'ctrl'],
  ['Win', 'Win', 'Win', 'Win', 'Win'],
  ['AltLeft', 'alt', 'alt', 'alt', 'alt'],
  ['Space', ' ', ' ', ' ', ' '],
  ['AltRight', 'alt', 'alt', 'alt', 'alt'],
  ['ArrowLeft', '◄', '◄', '◄', '◄'],
  ['ArrowDown', '▼', '▼', '▼', '▼'],
  ['ArrowRight', '►', '►', '►', '►'],
  ['ControlRight', 'ctrl', 'ctrl', 'ctrl', 'ctrl'],
];

export function drawKeyboardRu() {
  let draw = '';

  for (let i = 0; i < keyletters.length; i += 1) {
    draw += `<div class = "keyboard__key" data = ${keyletters[i][0]} >
    ${keyletters[i][1]}</div>`;
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

// /*function changeLanguage() {
//   let lang = localStorage.getItem('lang') || 'eng';
//   document.addEventListener('keydown', (event) => {
//     if (event.code === 'AltLeft' && event.code === 'ControlLeft') {
//       lang = lang === 'eng' ? 'lit' : 'eng';
//       localStorage.setItem('lang', lang);
//     }
//   });
// }*/
