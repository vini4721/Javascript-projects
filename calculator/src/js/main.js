document.querySelector(".button").addEventListener("click", function(){
  const selectedRadio = document.querySelector('input[name="operation"]:checked');

  if(selectedRadio) {
    const operation = selectedRadio.id;
    performCalculation(operation);
  }
  else{
    console.log("No operation selected");
  }
});

function performCalculation(operation) {
  let num1 = document.querySelector("#input1").value;
  let num2 = document.querySelector("#input2").value;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  let result,symbol;

  if(operation === 'add') {
    result = num1+num2;
    symbol = "+"
  }

  else if(operation === 'subtract'){
    result = num1-num2;
    symbol = "-";
  }

  else if(operation === 'divide'){
    result = num1/num2;
    symbol = "/";
  }

  else{
    result = num1*num2;
    symbol = "*";
  }

  document.querySelector(".output").textContent = `${num1} ${symbol} ${num2} = ${result}`;
}