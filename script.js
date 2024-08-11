const grid = document.getElementById("grid");

function getGridResolutionFromUser() {
    let gridResolution = '';
    let validated = false;
    while (!validated) {
        gridResolution = parseInt(prompt('Enter an integer between 1 and 100. Will generate a grid with the same number of rows and columns.', '16'));
        if (isNaN(gridResolution)) {
            alert("Your reponse is not a number. Please try again");
        } else if (gridResolution < 1 || gridResolution > 100) {
            alert(`You entered ${gridResolution}. Accepted range is between 1 and 100. Try again.`)
        }
        else {
            validated = true;
        }
    }
    document.documentElement.style.setProperty("--grid-resolution", gridResolution);
    createGrid(gridResolution);
}

function createGrid(gridResolution) {
    grid.innerHTML = "";
    for (let index = 0; index < gridResolution ** 2; index++) {
        const el = document.createElement("div");
        el.addEventListener("mouseenter", (ev) => onGridSquareHover(ev));
        grid.appendChild(el);
    }
}

function onGridSquareHover(ev) {
    if (ev.target.classList.contains("hovered")) {
        if (ev.target.style.opacity < 1) {
            ev.target.style.opacity = parseFloat(ev.target.style.opacity) + 0.1;
        }
    } else {
        ev.target.classList.add("hovered");
        ev.target.style.opacity = 0.1;
        ev.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`
    }
}

createGrid(16)