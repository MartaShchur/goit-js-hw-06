// Написати скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використати CSS - класи valid і invalid, які вже додані у вихідні файли завдання.

const inputValid = document.querySelector("#validation-input")

inputValid.addEventListener("blur", handlerCheck)

console.log(inputValid.dataset.length)

function handlerCheck(evt) {
    if (evt.currentTarget.value.length === Number(inputValid.dataset.length)){
        inputValid.classList.add('valid');
        inputValid.classList.remove('invalid');
} 
    else {
        inputValid.classList.remove('valid');
        inputValid.classList.add('invalid');

}
}
