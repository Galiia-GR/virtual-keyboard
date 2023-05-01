const keyletters = [
  ['Backquote', 'ё', 'Ё'],
  ['Digit1', '1', '!'],
  ['Digit2', '2', '"'],
  ['Digit3', '3', '№'],
  ['Digit4', '4', ';'],
  ['Digit5', '5', '%'],
  ['Digit6', '6', ':'],
  ['Digit7', '7', '?'],
  ['Digit8', '8', '*'],
  ['Digit9', '9', '('],
  ['Digit0', '0', ')'],
  ['Minus', '-', '_'],
  ['Equal', '=', '+'],
  ['Backspace', '&#8592; Backspace', '&#8592 Backspace'],
  ['Tab', '&#8677; Tab', '&#8677; Tab'],
  ['KeyQ', 'й', 'Й'],
  ['KeyW', 'ц', 'Ц'],
  ['KeyE', 'у', 'У'],
  ['KeyR', 'к', 'К'],
  ['KeyT', 'е', 'Е'],
  ['KeyY', 'н', 'Н'],
  ['KeyU', 'г', 'Г'],
  ['KeyI', 'ш', 'Ш'],
  ['KeyO', 'щ', 'Щ'],
  ['KeyP', 'з', 'З'],
  ['BracketLeft', 'х', 'Х'],
  ['BracketRight', 'ъ', 'Ъ'],
  ['Backslash', '\\', '|'],
  ['Del', 'Del', 'Del'],
  ['CapsLock', 'CapsLock &#8682;', 'CapsLock &#8682;'],
  ['KeyA', 'ф', 'Ф'],
  ['KeyS', 'ы', 'Ы'],
  ['KeyD', 'в', 'В'],
  ['KeyF', 'а', 'А'],
  ['KeyG', 'п', 'П'],
  ['KeyH', 'р', 'Р'],
  ['KeyJ', 'о', 'О'],
  ['KeyK', 'л', 'Л'],
  ['KeyL', 'д', 'Д'],
  ['Semicolon', 'ж', 'Ж'],
  ['Quote', 'э', 'Э'],
  ['Enter', 'Enter &#8626;', 'Enter &#8626;'],
  ['ShiftLeft', '&#8679; Shift', '&#8679; Shift'],
  ['KeyZ', 'я', 'Я'],
  ['KeyX', 'ч', 'Ч'],
  ['KeyC', 'с', 'С'],
  ['KeyV', 'м', 'М'],
  ['KeyB', 'и', 'И'],
  ['KeyN', 'т', 'Т'],
  ['KeyM', 'ь', 'Ь'],
  ['Comma', 'б', 'Б'],
  ['Dot', 'ю', 'Ю'],
  ['Slash', '.', ','],
  ['ArrowUp', '▲', '▲'],
  ['ShiftRight', '&#8679; Shift', '&#8679; Shift'],
  ['ControlLeft', 'ctrl', 'ctrl'],
  ['Win', 'Win', 'Win'],
  ['AltLeft', 'alt', 'alt'],
  ['Space', ' ', ' '],
  ['AltRight', 'alt', 'alt'],
  ['ArrowLeft', '◄', '◄'],
  ['ArrowDown', '▼', '▼'],
  ['ArrowRight', '►', '►'],
  ['ControlRight', 'ctrl', 'ctrl'],
];

export function drawKeyboardRu() {
  let draw = '';

  for (let i = 0; i < keyletters.length; i += 1) {
    draw += `<div class = "keyboard__key" data = ${keyletters[i][0]} >
    ${keyletters[i][1]}</div>`;
  }

  document.querySelector('.keyboard').innerHTML = draw;

  // const keyboard = document.querySelectorAll('.keyboard__key');

  // for (let i = 0; i < keyboard.length; i += 1) {
  //   for (let j = 0; j < keyboard.length; j += 1) {
  //     console.log(keyletterRu[i][j][2]);
  //   }
  // }

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
