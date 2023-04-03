

const container = document.querySelector('.container');

function createGrid(num) {
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  for (let i = 0; i < num * num; i++) {
    const box = document.createElement('div');
    box.classList.add('box-element');
    container.appendChild(box);
  }
}

createGrid(16);

