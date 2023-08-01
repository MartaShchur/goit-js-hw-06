// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
//  та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = 0;
const value = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', onClickDecrementBtn);
incrementBtn.addEventListener('click', onClickIncrementBtn);

function onClickDecrementBtn(evt) {
  counterValue -= 1;
  value.textContent = counterValue;
};

function onClickIncrementBtn(evt) {
  counterValue += 1;
  value.textContent = counterValue;
};













