document.addEventListener("DOMContentLoaded", main);

function main() {
  const buttonElement = document.querySelector(".button");

  if (buttonElement) {
    buttonElement.addEventListener("click", selectOperator);
  }
}

function selectOperator() {
  const selectedRadio = document.querySelector('input[name="operation"]:checked');

  if (selectedRadio) {
    const operation = selectedRadio.value;
    performCalculation(operation);
  }
  else {
    alert("No operation selected");
  }
}

function performCalculation(operation) {
  const operationType = {
    "add": "+",
    "subtract": "-",
    "multiply": "*",
    "divide": "/",
  };

  let InputElements = document.querySelectorAll(".input-group input");
  let operationOnInput = [];

  //To extract values from the inputElements array
  for(let i = 0; i < InputElements.length; i++) {
    operationOnInput[i] = parseInt(InputElements[i].value);
  }
  
  let result = 0;
  let displayOutput = "";

  for (let i = 0; i < operationOnInput.length; i++) {

    displayOutput += `${operationOnInput[i]}`;

    if (i < operationOnInput.length - 1)
      displayOutput += `${operationType[operation]}`;

    switch(operation) {
      case "add":
        result += operationOnInput[i];
        break

      case "subtract":
        if(i == 0)
          result = operationOnInput[i];
        else
          result -= operationOnInput[i];
        break

      case "multiply":
        if(i == 0)
          result = 1;
          result *= operationOnInput[i];
        break;

      case "divide":

    }
  }
  document.querySelector(".output").textContent = `${displayOutput} = ${result}`;
}

let n = 3;
let lastInputTag = document.getElementById("add-button");
lastInputTag.addEventListener("click", generateInputTag);

function generateInputTag() {
  const inputContainer = document.createElement("div");
  inputContainer.className = "input-group";

  const createdInputElement = document.createElement("input");
  createdInputElement.setAttribute("placeholder", `input ${n}`);
  createdInputElement.setAttribute("id",`input${n}`);

  const createLabel = document.createElement("label");
  createLabel.setAttribute("for",`input${n}`);

  inputContainer.appendChild(createdInputElement);
  inputContainer.appendChild(createLabel);
  n++;

  document.querySelector(".inputs").appendChild(inputContainer);
}

