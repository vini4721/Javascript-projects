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

  let result = 0,displayOutput = "";

  const operationType = {
    "add": "+",
    "subtract": "-",
    "multiply": "*",
    "divide": "/",
  };

  let num = document.querySelectorAll(".inputs input");
  
  for(let i = 0; i < num.length; i++) {

    displayOutput += `${num[i].value}`;

    if(i < num.length-1)
      displayOutput += `${operationType[operation]}`;

    if(operation === 'add') {
      result += parseInt(num[i].value);
    }
  
    else if(operation === 'subtract'){
      result -= parseInt(num[i].value);
    }
  
    else if(operation === 'divide'){
      if(i === 0)
        result = parseInt(num[i]);
      else{
        const value = parseInt(num[i]);
        if(value !== 0)
          result /= value;
      }
    }
  
    else{
      if(i === 0)
        result = 1;

      result *= parseInt(num[i].value);
    }

  }
  document.querySelector(".output").textContent = `${displayOutput} = ${result}`;
}

let n = 3;
let lastInputTag = document.querySelector(".input-group img");
lastInputTag.addEventListener("click", generateInputTag);

function generateInputTag() {
  if (lastInputTag.parentNode)
    lastInputTag.remove();

  const inputContainer = document.createElement("div");
  inputContainer.className = "input-group";

  const createdInputElement = document.createElement("input");
  createdInputElement.setAttribute("placeholder",`input ${n}`);
  inputContainer.appendChild(createdInputElement);
  n++;

  const plusIcon = document.createElement("img");
  plusIcon.src = "https://cdn-icons-png.flaticon.com/512/1828/1828919.png";
  plusIcon.className = "plus-icon";
  inputContainer.appendChild(plusIcon);

  document.querySelector(".inputs").appendChild(inputContainer);

  lastInputTag = plusIcon;
  lastInputTag.addEventListener("click", generateInputTag);
}

