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
const calculatorButtons = document.querySelectorAll('.calculator-buttons'); // Every single pressable button on the calculator (excluding the divs with the class .extra)
const operators = document.querySelectorAll('.operators'); // The operators
const extra = document.querySelectorAll('.extra'); // Extra buttons that are neither operands or operators
const operations = document.querySelector('#operations'); // The panel that contains the displays the ongoing operation
operations.textContent = '';
const result = document.querySelector('#result'); // The panel that will contain the result of an operation (one operation at a time, as per TOP's instructions to not evaluate more than one operation at a time)
const clear = document.querySelector('#clear'); // The clear element, which will reset everything upon being clicked on
const equals = document.querySelector('#equals'); // The equals sign element, which is supposed to return the result after being pressed on
const digits = document.querySelectorAll('.digits'); // The digit buttons in the calculator, which will also be the operands
let operandsArr = []; // an array holding the operands
// let operandsSubArr = []; // a sub array to contain temporary data that will be later pushed to operandsArr (the sub array will be cleaned after each push)
let operatorsArr = []; // an array holding the textContents of the pressed operators
let resultNum = 0; // the result of a single operation (as per TOP's instructions to not evaluate more than one operation at a time)

// Event listeners
calculatorButtons.forEach(calculatorButton => { // Change the color of the pressed buttons, and add the corresponding button's text content to the #operations div
    calculatorButton.addEventListener('click', () => {
        calculatorButton.classList.toggle('clicked');
        operations.textContent += calculatorButton.textContent; // add the pressed calculator buttons to operations.textContent to display the operation to the user
    })
})

digits.forEach(digit => { // Add the pressed digits to operandsStr
    digit.addEventListener('click', () => {
        operandsArr.push(digit.textContent);
    })
})

operators.forEach(operator => { // Add the pressed operators to operatorsArr, add a space to operands.textContent to serve as a delimiter when creating operandsArr
    operator.addEventListener('click', () => {
        operatorsArr.push(operator.textContent); // push the pressed operator to the operatorsArr
        operandsArr.push(' '); // add a space to operandsStr to serve as a delimiter
        console.log(operandsArr);
        if (operandsArr.length >= 2) {
            operandsArr.pop();
            operandsArr = [...operandsArr.join('').trim().split(' ').map(elem => +elem)];
            resultNum = operate[operatorsArr[0]](operandsArr[0], operandsArr[1]); // assign the result of the operation to resultNum
            result.textContent = resultNum; // assign the result of the operation to result.textContent to display it to the user
            operations.textContent = resultNum + '+';
            operatorsArr = [];
            operandsArr = [];
            operandsArr.push(resultNum);
        }
    })
})

equals.addEventListener('click', () => { // Displays the result of the operation on click
    /* operandsSubArr = operands.textContent.split(' ').map(num => +num);
    operandsArr.push(...operandsSubArr); // create the operandsArr array using the space as a delimiter
    resultNum = operate[operatorsArr[0]](operandsArr[0], operandsArr[1]); // assign the result of the operation to resultNum to store it for later use
    result.textContent = operate[operatorsArr[0]](operandsArr[0], operandsArr[1]); // assign the result of the operation to result.textContent to display it to the user
    if (operandsArr.length >= 2) {
        operatorsArr = [];
        operandsArr = [];
        operands.textContent = '';
    }
    operandsArr.push(resultNum); */
})

clear.addEventListener('click', () => { // Reloads the page on click
    location.reload();
})
