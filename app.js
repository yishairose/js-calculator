const clear = document.querySelectorAll('.control')
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const display = document.querySelector('input');
const sumDisplay = document.querySelector('.sum-display');

let number1 = null;
let number2 = null;
let math;
let result = 0;
clear.forEach(item => {
    item.addEventListener('click', erase)
})

numbers.forEach(function (number) {
    number.addEventListener('click', function () {
        display.value += this.innerText
        sumDisplay.innerText += this.innerText;

    })
})
let currentOperator;
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        let currentNumber = display.value;

        if (e.target.getAttribute('data-operator') !== '=') {
            if (result === 0) {
                currentOperator = e.target.getAttribute('data-operator');
                number1 = currentNumber;
                sumDisplay.innerText += e.target.innerText;
                display.value = '';
            }
            else {
                currentOperator = e.target.getAttribute('data-operator');
                number1 = result
                sumDisplay.innerText += e.target.innerText;
                display.value = ''


            }
        } else {
            if (currentOperator) {
                number2 = display.value;
                result = eval(number1 + currentOperator + number2);
                sumDisplay.innerText = result;
                currentOperator = undefined;
                display.value = result;
            }
        }
    })
})

function erase() {
    display.value = '';
    sumDisplay.innerText = '';
    number1 = 0;
    number2 = 0;
    result = 0
}

