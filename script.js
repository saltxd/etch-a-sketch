

const container = document.querySelector('.container');
const newGrid = document.querySelector('#new-grid');
const resetButton = document.querySelector('#reset');

function createGrid(num) {
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  for (let i = 0; i < num * num; i++) {
    const box = document.createElement('div');
    box.classList.add('box-element');
    box.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    container.appendChild(box);
  }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    } 
}

newGrid.addEventListener('click', () => {
    let gridSize = prompt('Enter a number of squares per side (max 100):');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    if (gridSize > 100) gridSize = 100;
    createGrid(gridSize);
});

resetButton.addEventListener('click', () => {
    removeGrid();
    createGrid(16);
})

createGrid(16);

