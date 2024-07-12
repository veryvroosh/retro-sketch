const mainGrid = document.querySelector("#grid-container");

let gridArray = [];
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

createGrid(16);