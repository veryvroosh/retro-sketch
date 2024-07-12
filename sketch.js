const mainGrid = document.querySelector("#grid-container");

let gridArray = [];

// grid size variables
let oldSize = 16;
let newSize = 16;

let isMouseDown = false;
let isDragging = false;

// function to create a grid based on inputted value
function createGrid(size) {
    for (let i = 0; i<size*size; i++) {
        gridArray[i] = document.createElement("div");
        gridArray[i].classList.add("grid-div");
        gridArray[i].classList.add("size-formater");
        mainGrid.appendChild(gridArray[i]);

        // event listener for mouseover (for dragging effect)
        gridArray[i].addEventListener('mouseover', () => {
            if (isDragging) {
                gridArray[i].style.backgroundColor = "#363636";
            }
        });
    }

    // sizing each box
    const style = document.createElement("style");
    style.innerHTML = `
    .size-formater {
    height: ${600/(size)}px; 
    width: ${600/(size)}px;
    }
    `;
    document.head.appendChild(style);
}

// creates grid with default size 16x16
createGrid(oldSize);


// clears the grid
function removeGrid() {
    for (let i = (oldSize*oldSize)-1; i>=0; i--) {
        gridArray[i].remove();
        gridArray.pop();
    }
}

// resized grid based on input
const sizeButton = document.querySelector("#size-button");
sizeButton.addEventListener('click', () => {
    newSize = parseInt(prompt("What size grid do you want?"));
    removeGrid();
    createGrid(newSize);
    oldSize = newSize;
});


// clears the grid
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener('click', () => {
    removeGrid();
    oldSize = 0;
    createGrid(newSize);
    oldSize = newSize;
})


// Event listeners for dragging effect
mainGrid.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
    isDragging = false; // Reset dragging state
});

mainGrid.addEventListener('mouseover', (event) => {
    if (isMouseDown) {
        isDragging = true;
        event.target.style.backgroundColor = "#363636";
    }
});