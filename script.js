//script
//const defaultSize = 16

//let currentSize = defaultSize;

//function createGrid(size){
   // grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
   // grid.style.gridTemplateRows = `repeat(${size}, 1 fr)`

   // for(let i = 0; i < size; i++) {
   //     const gridElement = document.createElement('div')
   //       gridElement.classList.add('grid-element')
   //       gridElement.addEventListener('mouseover', changeColor)
   //       gridElement.addEventListener('mousedown', changeColor)
   //       grid.appendChild(gridElement)
   // }
//}

//createGrid(defaultSize);

const container = document.querySelector('.container');

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows= `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    containerElement.addEventListener('mouseover', changeColor)
    containerElement.addEventListener('mousedown', changeColor)
    container.appendChild(box);
  }
}

createGrid(16);






