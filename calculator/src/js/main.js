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
  let values = [];

  //To extract the values (use forEach or array.from())
  values = Array.from(InputElements).map(function (InputElement) {
    return parseInt(InputElement.value);
  });

  let result = 0;
  let displayOutput = "";

  values.forEach(function(item,index) {
    displayOutput += `${values[index]}`;

    if (index < values.length - 1)
      displayOutput += `${operationType[operation]}`;
  })

  switch (operation) {
    case "add":
      result = values.reduce(function(accumulator, element){
        return accumulator+element;
      })
      break;

    case "subtract":
      result = values.reduce(function(accumulator, element){
        return accumulator-element;
      })
      break;

    case "multiply":
      result = values.reduce(function(accumulator, element){
        return accumulator*element;
      })
      break;
  }
  document.querySelector(".output").textContent = `${displayOutput} = ${result}`;
}

let n = 2;
const plusImageIcon = document.getElementById("add-button");
plusImageIcon.addEventListener("click", generateInputTag);

function generateInputTag() {
  const inputContainer = document.createElement("div");
  inputContainer.className = "input-group";

  const createdInputElement = document.createElement("input");
  createdInputElement.setAttribute("placeholder", `input ${n+1}`);
  createdInputElement.setAttribute("id", `input${n+1}`);

  const createLabel = document.createElement("label");
  createLabel.setAttribute("for", `input${n+1}`);

  inputContainer.appendChild(createdInputElement);
  inputContainer.appendChild(createLabel);
  n++;

  document.querySelector(".inputs").appendChild(inputContainer);

  if(n > 2)
    minusImageIcon.hidden = false;
}


const minusImageIcon = document.getElementById("remove-button");
minusImageIcon.addEventListener("click", removeInputTag);

function removeInputTag() {
  document.querySelector(".input-group").remove();
  n--;

  if(n == 2)
    minusImageIcon.hidden = true;
}


