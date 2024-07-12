const mainGrid = document.querySelector("#grid-container");

let gridArray = [];
let oldSize = 16;
function createGrid(size) {
    for (let i = 0; i<size*size; i++) {
        gridArray[i] = document.createElement("div");
        gridArray[i].classList.add("grid-div");
        gridArray[i].classList.add("size-formater");
        mainGrid.appendChild(gridArray[i]);
    }
    const style = document.createElement("style");
    style.innerHTML = `.size-formater {
    height: ${600/(size)}px; width: ${600/(size)}px;
    }`;
    document.head.appendChild(style);
}

function removeGrid() {
    for (let i = (oldSize*oldSize)-1; i>=0; i--) {
        gridArray[i].remove();
        gridArray.pop();
    }
}

const sizeButton = document.querySelector("#size-button");
sizeButton.addEventListener('click', () => {
   let newSize = parseInt(prompt("What size grid do you want?"));
   removeGrid();
   createGrid(newSize);
   oldSize = newSize;
});

createGrid(oldSize);