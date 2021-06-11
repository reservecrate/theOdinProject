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
    '√': (a) => sqrt(a)
};

// Elements
const buttons = document.querySelectorAll('.buttons'); // Every single pressable button in the calculator
const operators = document.querySelectorAll('.operators'); // The operators
const extra = document.querySelectorAll('.extra'); // Extra buttons that are neither operands or operators
const operations = document.querySelector('#operations'); // The panel that contains the contains the operations (what the user types)
operations.textContent = '';
const result = document.querySelector('#result'); // The panel that will contain the results of the operation/operations
const clear = document.querySelector('#clear'); // The clear element, which will reset everything upon being clicked on
const equals = document.querySelector('#equals'); // The equals sign element, which is supposed to return the result after being pressed on
const operands = document.querySelectorAll('.numbers'); // The number buttons in the calculator, aka the operands
operands.textContent = '';
let operandsArr = [];
let operandsSubArr = [];
let operatorsArr = [];
let resultNum;

// Event listeners
buttons.forEach(button => { // Change the color of the pressed buttons, and add the corresponding button's text content to the #operations div
    button.addEventListener('click', () => {
        button.classList.toggle('clicked');
        operations.textContent += button.textContent;
    })
})

operands.forEach(operand => { // Add the pressed numbers (operands) to operands.textContent
    operand.addEventListener('click', () => {
        operands.textContent += operand.textContent;
    })
})

operators.forEach(operator => { // Add the pressed operators to operatorsArr, add a space to operands.textContent to serve as a delimiter when defining the operandsArr
    operator.addEventListener('click', () => {
        operatorsArr.push(operator.textContent); // push the pressed operator to the operatorsArr
        operands.textContent += ' '; // add a space to operands.textContent to serve as a delimiter
        operandsSubArr = operands.textContent.split(' ').map(num => +num);
        operandsArr.push(...operandsSubArr); // create the operandsArr array using the space as a delimiter
        resultNum = operate[operatorsArr[0]](operandsArr[0], operandsArr[1]); // assign the result of the operation to resultNum to store it for later use
        result.textContent = operate[operatorsArr[0]](operandsArr[0], operandsArr[1]); // assign the result of the operation to result.textContent to display it to the user
        if (operandsArr.length >= 2) {
            operatorsArr.pop();
            operandsArr = [];
            operands.textContent = '';
        }
        operandsArr.push(resultNum);
        operations.textContent = result.textContent;
    })
})

equals.addEventListener('click', () => { // Displays the result of the operation on click
    operandsSubArr = operands.textContent.split(' ').map(num => +num);
    operandsArr.push(...operandsSubArr); // create the operandsArr array using the space as a delimiter
    resultNum = operate[operatorsArr[0]](operandsArr[0], operandsArr[1]); // assign the result of the operation to resultNum to store it for later use
    result.textContent = operate[operatorsArr[0]](operandsArr[0], operandsArr[1]); // assign the result of the operation to result.textContent to display it to the user
    if (operandsArr.length >= 2) {
        operatorsArr = [];
        operandsArr = [];
        operands.textContent = '';
    }
    operandsArr.push(resultNum);
})

clear.addEventListener('click', () => { // Reloads the page on click
    location.reload();
})
