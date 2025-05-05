document.addEventListener("DOMContentLoaded", main);

function main() {
  document.querySelector(".add-task > button").addEventListener("click", getInputTagValue);
}

function getInputTagValue() {
  const inputValue = document.querySelector(".add-task > input").value;

  if(inputValue) {
    const taskContainer = document.createElement("div");
    taskContainer.className = "tasks-buttons";

    const task = document.createElement("p");
    task.innerText = "• " + inputValue;
    taskContainer.appendChild(task);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "controls";

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    buttonContainer.appendChild(completeBtn);
  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    buttonContainer.appendChild(deleteBtn);

    taskContainer.appendChild(buttonContainer);
    document.querySelector(".display-tasks").appendChild(taskContainer);

    completeBtn.addEventListener("click", function() {
      if(completeBtn.innerText === "Complete")
        completeBtn.innerText = "Undo";
      else  
        completeBtn.innerText = "Complete";
    })

    deleteBtn.addEventListener("click", function() {
        const removeTask = this.closest(".tasks-buttons");

        if(removeTask)
          removeTask.remove();
    })
  }
}