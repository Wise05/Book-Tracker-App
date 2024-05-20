const header = document.querySelector('h1'); 
const subHeader = document.querySelector('h2');
const buttonOptions = document.querySelector('.options-Container');

const animatedItems = [header, subHeader, buttonOptions];

function transition(items) {
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
        }, (index + 1) * 1000); 
    });
}

document.addEventListener("DOMContentLoaded", () => transition(animatedItems));

const fancyText = document.getElementById('title-text');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
addEventListener('transitionend', () => {
    fancyText.classList.add('text');
    button1.classList.add('text');
    button2.classList.add('text');
});