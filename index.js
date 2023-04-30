import { drawKeyboardRu } from './drawKeyboardRu.js';

function layout() {
const {body}=document;

  const container = document.createElement('div');
  container.classList.add("container");
  body.appendChild(container);

container.innerHTML = `
<h1 class="keyboard__title"></h1>
<textarea class=container__textarea></textarea>
<div class="keyboard"></div>
<p class="description"></p>
<p class="change__lang"></p>
`;

document.querySelector(".keyboard__title")
.innerText="RSS Виртуальная клавиатура";

document.querySelector(".description")
.innerText="Клавиатура создана в операционной системе Windows";

document.querySelector(".change__lang")
.innerText="Для переключения языка комбинация: левыe shift + ctrl";
}


layout();

drawKeyboardRu();


