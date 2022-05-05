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
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
    }
  }
}

//---------- Main ----------//
// Specify the number of rows of the n x n grid
const gridSize = 16;
// Generate the grid
generateGrid(gridSize);
// Create the squares and add to the grid
generateSquares(gridSize);

