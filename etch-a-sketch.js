const headingElement = document.createElement('h1');
headingElement.textContent = 'Etch-A-Sketch';
const containerDiv = document.createElement('div');
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
document.body.appendChild(headingElement).id = 'main-heading';
document.body.appendChild(resetButton).id = 'reset-button';
document.body.appendChild(containerDiv).id = 'container-div';
const userNumber = parseInt(prompt('Enter the number of cells in a row/column: '));
if (userNumber > 100 || typeof userNumber !== 'number') {
    alert('Invalid value entered. Please try again');
    document.reload();
}

const createCell = () => {
    return document.createElement('div');
};

const createRow = () => {
    let gridRow = document.createElement('div');
    for (let i = 0; i < userNumber; i++) {
        gridRow.appendChild(createCell()).className = 'cell-element';
    }
    return gridRow;
};

const createGrid = () => {
    for (let i = 0; i < userNumber; i++) {
        containerDiv.appendChild(createRow()).className = 'grid-row';
    }
};

createGrid();

let cells = document.querySelectorAll('.cell-element');
cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        cell.clas
        sList.add('touched');
    });
    cell.addEventListener('click',() => {
        cell.classList.toggle('clicked');
        cell.textContent = 'I got clicked!';
    })
    cell.addEventListener('dblclick', () => {
        cell.classList.toggle('doubleclicked');
        cell.textContent = 'I got double clicked!';
    })
})

resetButton.addEventListener('click', () => {
    location.reload();
})