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
  
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
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
  do {
    gridSize = prompt("Enter a grid size (n x n):");
    if (gridSize > 100) {
      alert("Please limit grid size from 1-100");
    } else if (gridSize < 1) {
      alert("Please limit grid size from 1-100")
    }
  } while (gridSize > 100 || gridSize < 1);
}


//---------- Main ----------//
const container = document.querySelector('#grid-container');

// Specify the number of rows of the n x n grid
// and generate the grid
let gridSize = 100;
promptGridSize();
generateGrid(gridSize);
generateSquares(gridSize);

// Add an event listener to the squares to change style on hover
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', fillSquare))