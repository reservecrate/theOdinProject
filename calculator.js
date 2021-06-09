// Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (a, b) => a ** b;
const sqrt = a => Math.sqrt(a);
const operate = {
    '+': (a, b) => add(a, b),
    '-': (a, b) => subtract(a, b),
    '*': (a, b) => multiply(a, b),
    '/': (a, b) => divide(a, b),
    '**': (a, b) => power(a, b),
    '√': (a, b) => sqrt(a, b)
}

// Elements
const buttons = document.querySelectorAll('.buttons'); // Every single button in the calculator
const operators = document.querySelectorAll('.operators'); // The operators
let operatorsText = ''; // The string which will contain all the pressed operators
const extra = document.querySelectorAll('.extra'); // Extra buttons that are neither operands or operators
const operations = document.querySelector('#operations'); // The panel that contains the contains the operations, or, what the user types
let operationsText = ''; // The string that contains the user's operations
const result = document.querySelector('#result'); // The panel that will contain the results of the operation/operations
let resultText; // The variable that will store the result of the operation/operations
const clear = document.querySelector('#clear'); // The clear element, which will reset everything upon being clicked on
const equals = document.querySelector('#equals'); // The equals sign element, which is supposed to return the result after being pressed on
const operands = document.querySelectorAll('.numbers'); // The number buttons in the calculator, aka the operands
let operandsText = '';

// Event listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('clicked');
        operationsText += button.textContent;
        operations.textContent = operationsText;
    })
})

operands.forEach(operand => {
    operand.addEventListener('click', () => {
        operandsText += operand.textContent;
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operatorsText += operator.textContent;
        operandsText += ' ';
    })
})

clear.addEventListener('click', () => {
    location.reload();
})

let operandsArr = operandsText.split(' ').map(num => +num);
let operatorsArr = operatorsText.split('');

equals.addEventListener('click', () => {
    resultText = operate[operatorsArr[0]](operandsArr[0], operandsArr[1]);
    alert(resultText);
})

