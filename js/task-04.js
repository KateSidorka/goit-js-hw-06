const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');
const valueEl = counter.querySelector('#value');
let counterValue = 0;

function updateCounter() {
    valueEl.textContent = counterValue;
}

decrementButton.addEventListener('click',onDecrementBtnClick);
incrementButton.addEventListener('click', onIncrementBtnClick);

function onIncrementBtnClick(){
    counterValue++;
    updateCounter();
}
function onDecrementBtnClick(){
    counterValue--;
    updateCounter();
}
updateCounter();