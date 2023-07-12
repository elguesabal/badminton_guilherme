const scrollports = document.getElementsByClassName("scrollport");
const initialValue = Math.floor(300 / 2); // Número inicial selecionado (150 no caso de 1-300)
const debouncedFunc = debounce(check, 250);
let currentNumber = initialValue;

for (const scrollport of scrollports) {
    scrollport.addEventListener("scroll", debouncedFunc);
    scrollport.scrollTo({
        top: (initialValue - 1) * 3 + 1,
        behavior: "smooth"
    });

    for (let i = 1; i <= 300; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = i;
        scrollport.appendChild(cell);
    }
}

function check(e) {
    const rect = e.target.getBoundingClientRect();
    const centerCell = document.elementFromPoint(
        rect.left + e.target.offsetWidth / 2,
        rect.top + e.target.offsetHeight / 2
    );

    for (const cell of e.target.getElementsByClassName("selected")) {
        cell.classList.remove("selected");
    }

    centerCell.classList.add("selected");
    currentNumber = parseInt(centerCell.textContent);
    console.log("Número em destaque:", currentNumber);
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}