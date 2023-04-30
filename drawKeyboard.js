const keyletterRu = [
  [
    ['Backslash','ё', 'Ё'],
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
    ['Backspace', '&#8592;', '&#8592'],
  ],
  [
    ['Tab', '&#8677;', '&#8677;'],
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
    ['Enter', '&#8626;', '&#8626;'],
  ],
  [
    ['CapsLock', '&#8682;', '&#8682;'],
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
  ],
  [
    ['ShiftLeft', '&#8679;', '&#8679;'],
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
    ['arrow ArrowUp', '▲', '▲'],
    ['ShiftRight', '&#8679;', '&#8679;'],
  ],
  [
    ['ControlLeft', 'ctrl', 'ctrl'],
    ['Fn', 'fn', 'fn'],
    ['AltLeft', 'alt', 'alt'],
    ['Space', ' ', ' '],
    ['AltRight', 'alt', 'alt'],
    ['arrow ArrowLeft', '◄', '◄'],
    ['arrow ArrowDown', '▼', '▼'],
    ['arrow ArrowRight', '►', '►'],
    ['ControlRight', 'ctrl', 'ctrl'],
  ],
];

export function drawKeyboardRu() {
  let draw='';

  for (let i=0; i<keyletterRu.length;  i += 1){

    for (let j = 0; j <keyletterRu[i].length; j += 1) {

    draw += `<div class = "keyboard__key" data = ${keyletterRu[i][j][0]} >
    ${keyletterRu[i][j][1]}</div>`;
  }
}
  document.querySelector('.keyboard').innerHTML=draw;
};
