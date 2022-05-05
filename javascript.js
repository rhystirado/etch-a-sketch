//---------- Function Definitions ----------//

// Set the n x n grid based on input number of rows
function generateGrid(gridSize) {
  const container = document.querySelector('#grid-container');
  const gridWidth = container.offsetWidth;
  
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridAutoRows = `${gridWidth / gridSize}px`;
  container.style.gridAutoColumns = `${gridWidth / gridSize}px`;
}

// Create the squares and add to the grid
function generateSquares(gridSize) {
  const container = document.querySelector('#grid-container');
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      console.log(`Square [${row}, ${col}]`);
      const square = document.createElement('div');
      square.classList.add('square');
      // Add an event listener to the squares to change style on hover
      square.addEventListener('mouseover', fillSquare);
      container.appendChild(square);
    }
  }
}

// Change the square style when it has been hovered over
function fillSquare(event) {
  this.classList.add('filled')
}

// Ask the user for a grid size
function promptGridSize() {
  let gridSize = 0;
  do {
    gridSize = parseInt(prompt("Enter a grid size (n x n):"));
    if (gridSize > 100) {
      alert("Please limit grid size from 1-100");
    } else if (gridSize < 1) {
      alert("Please limit grid size from 1-100")
    }
  } while (gridSize > 100 || gridSize < 1);

  return gridSize;
}

// Prompt the user to enter a new grid size and generate the new grid
function resizeGrid() {
  const gridSize = promptGridSize();
  deleteGrid();
  generateGrid(gridSize);
  generateSquares(gridSize);
}

function deleteGrid() {
  const container = document.querySelector('#grid-container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//---------- Main ----------//
// Specify the number of rows of the n x n grid
// and generate the initial grid
const initialSize = 16;
generateGrid(initialSize);
generateSquares(initialSize);

resizeGrid();
