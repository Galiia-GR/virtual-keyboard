import { drawKeyboard } from './drawKeyboard.js';

function layout() {
  const el = document.querySelector("#container");
el.innerHTML = `
<h1 class="keyboard__title"></h1>
<textarea class=container__textarea></textarea>
<div class="keyboard"></div>
`;

document.querySelector(".keyboard__title")
.innerText="RSS Виртуальная клавиатура";
}


layout();

drawKeyboard();
