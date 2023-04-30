import { drawKeyboardRu } from './drawKeyboard.js';

function layout() {
const {body}=document;

  const container = document.createElement('div');
  container.classList.add("container");
  body.appendChild(container);

container.innerHTML = `
<h1 class="keyboard__title"></h1>
<textarea class=container__textarea></textarea>
<div class="keyboard"></div>
`;

document.querySelector(".keyboard__title")
.innerText="RSS Виртуальная клавиатура";
}


layout();

drawKeyboardRu();


