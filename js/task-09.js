function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і 
// виводить значення кольору в span.color.


const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColorValue = document.querySelector('.color');

button.addEventListener("click", onclick);

function onclick(evt) {
  let randColor = getRandomHexColor()
  body.style.backgroundColor = randColor;
  spanColorValue.textContent = randColor;

}
