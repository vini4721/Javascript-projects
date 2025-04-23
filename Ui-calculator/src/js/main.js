document.addEventListener("DOMContentLoaded", main);

function main() {
    main.display = "";
    const nodeList = document.querySelectorAll(".row span");
    const array = Array.from(nodeList);

    array.forEach(function (spanElemet) {
        spanElemet.addEventListener("click", calculate);
    })
}

function calculate() {
    let value = this.innerText;
    let num = parseInt(value);

    let exp = main.display.replace(/×/g, '*').replace(/÷/g, '/');

    if (value === 'X') {
        main.display = main.display.slice(0, -1);
    }
    else if (value === 'AC') {
        main.display = "";
    }
    else if (value === '=') {
        main.display = String(eval(exp));
    }
    else {
        main.display += value;
    }
    document.querySelector(".output-screen").textContent = `${main.display}`;
}