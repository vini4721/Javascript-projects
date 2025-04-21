document.addEventListener("DOMContentLoaded", main);

function main() {
  const buttonElement = document.querySelector(".button");

  if (buttonElement) {
    buttonElement.addEventListener("click", selectOperator);
  }

  const plusImageIcon = document.getElementById("add-button");
  plusImageIcon.addEventListener("click", generateInputTag);

  const minusImageIcon = document.getElementById("remove-button");
  minusImageIcon.addEventListener("click", removeInputTag);

  main.elementReference = {
    minusImageIcon,
    minInputCount: 2,
  };
};
  
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

  values.forEach(function (item, index) {
    displayOutput += `${values[index]}`;

    if (index < values.length - 1)
      displayOutput += `${operationType[operation]}`;
  })

  switch (operation) {
    case "add":
      result = values.reduce(function (accumulator, element) {
        return accumulator + element;
      }, 0);
      break;

    case "subtract":
      result = values.reduce(function (accumulator, element) {
        return accumulator - element;
      })
      break;

    case "multiply":
      result = values.reduce(function (accumulator, element) {
        return accumulator * element;
      })
      break;
  }
  document.querySelector(".output").textContent = `${displayOutput} = ${result}`;
}

function generateInputTag() {
  const inputContainer = document.createElement("div");
  inputContainer.className = "input-group";

  const createdInputElement = document.createElement("input");
  createdInputElement.setAttribute("placeholder", `input ${main.elementReference.minInputCount + 1}`);
  createdInputElement.setAttribute("id", `input${main.minInputCount + 1}`);

  const createLabel = document.createElement("label");
  createLabel.setAttribute("for", `input${main.elementReference.minInputCount + 1}`);

  inputContainer.appendChild(createdInputElement);
  inputContainer.appendChild(createLabel);
  main.elementReference.minInputCount++;

  document.querySelector(".inputs").appendChild(inputContainer);

  if (main.elementReference.minInputCount > 2) {
    main.elementReference.minusImageIcon.hidden = false;
  }
}

function removeInputTag() {
  const inputGroups = document.querySelectorAll(".input-group");
  inputGroups[inputGroups.length-1].remove();
  main.elementReference.minInputCount--;

  if (main.elementReference.minInputCount == 2) {
    // main.elementReference.minusImageIcon.hidden = true;
    this.hidden = true;  //this points to the variable that triggers the event listener
  }
}


