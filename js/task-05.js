// Напиши скрипт, який під час набору тексту в інпуті input#name - input
// (подія input), підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

const inputValue = (event) => {
    outputName.textContent = inputName.value.trim() !== ''
        ? event.currentTarget.value.trim()
        : 'Anonymous';
};

inputName.addEventListener('input', inputValue);


