document.addEventListener("DOMContentLoaded", main);

function main() {
    main.equation = [];
    main.currentIndex = 0;
    main.answer = 0;

    const nodeList = document.querySelectorAll(".row span");
    const array = Array.from(nodeList);

    array.forEach(function (spanElemet) {
        spanElemet.addEventListener("click", calculate);
    })

    document.addEventListener("keydown", OnKeyBind);
}

function OnKeyBind(event) {
    const keyCodeObject = {
        48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6",
        55: "7", 56: event.shiftKey ? "×" : "8", 57: "9",
        187: event.shiftKey ? "+" : "=", 189: "-", 13: "=", 191: "÷", 8: "X",
    };

    if(event.keyCode in keyCodeObject) {
        calculate(keyCodeObject[event.keyCode]);
    }
}

function calculate(value) {
    if(this)
        value = this.innerText;

    if (value === "AC") {
        main.equation = [];
        main.currentIndex = 0;
        document.querySelector(".answer").textContent = "";
    }
    else if (value === "X") {
        if (main.currentIndex >= 1) {
            main.equation.pop();
            main.currentIndex--;
        }
        else {
            main.equation = []
        }
    }
    else if (value === "=") {

        // for finding multiply and divide

        const equationCopy = [...main.equation];

        for (let i = 0; i < equationCopy.length; i++) {
            if (equationCopy[i] === "×") {
                let preValue = equationCopy[i - 1];
                let nextValue = equationCopy[i + 1];

                main.answer = parseFloat(preValue * nextValue);
                equationCopy.splice((i - 1), 3, main.answer);
                i = 0;
            }
            else if (equationCopy[i] === "÷") {
                let preValue = equationCopy[i - 1];
                let nextValue = equationCopy[i + 1];

                main.answer = parseFloat(preValue / nextValue);
                equationCopy.splice((i - 1), 3, main.answer);
                i = 0;
            }
        }

        // For checking plus or subtraction

        if (equationCopy.length > 1) {
            main.answer = equationCopy.reduce((accumulator, item, index) => {
                if(item === "+") {
                    return parseFloat(accumulator) + parseFloat(equationCopy[index+1]);
                }
                else if(item === "-"){
                    return parseFloat(accumulator) - parseFloat(equationCopy[index+1]);
                }
                else{
                    return accumulator;
                }
            })
        }
        document.querySelector(".answer").textContent = main.answer;
    }
    else {
        main.equation[main.currentIndex] = value;
        main.currentIndex++;
    }

    document.querySelector(".equation").textContent = main.equation.join('');
}