// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і 
// змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const elements = {
    fontSizeControl: document.querySelector("#font-size-control"),
    text: document.querySelector("#text"),
}

elements.fontSizeControl.addEventListener("input", handlerChange)

function handlerChange(evt) {
    elements.text.style.fontSize = `${evt.currentTarget.value}px`
    console.log(handlerChange)
}
