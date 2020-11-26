import "./tasks.css";
import { createElem } from "../../../functions/createElem";

const taskHTML = `
<form class="taskContainer__form" id="taskContainer__form">
    <div class="taskContainer__formWrapper">
        <input
            placeholder="What is in your mind?"
            onfocus="this.placeholder = ''" 
            onblur="this.placeholder = 'What is in your mind?'" 
            class="taskContainer__addTaskInput" id="taskContainer__addTaskInput">
        <button class="taskContainer__addTaskButton" id="taskContainer__addTaskButton">Add</button>
    </div>
</form>
<div class="taskContainer__tasks" id="taskContainer__tasks">
     
</div>
`;

export function task() {
  createElem(["div", "taskContainer", "taskContainer", "mainFrame"], taskHTML);
}
task();

const addTaskButton = document.querySelector("#taskContainer__addTaskButton");
const taskName = document.querySelector("#taskContainer__addTaskInput");
const tasksContainer = document.querySelector("#taskContainer__tasks");

let arrOfTasks = [];

const addingTask = () => {
  addTaskButton.addEventListener("click", () => {
    let newTaskProp = {
      taskName: taskName.value
    };
    arrOfTasks.push(newTaskProp);
    localStorage.setItem("taskList", JSON.stringify(arrOfTasks));
    displayTasks();
  });
};

const displayTasks = () => {
  let addedTaskHTML = "";
  arrOfTasks.forEach((item, index) => {
    addedTaskHTML += `
        <div class="task" draggable="true" id='item_${index}'> 
            <div class="taskHeaderWrapper">
                <span class="taskHeaderWrapper__taskText">${item.taskName}</span>
            </div>
            <div class="task_Container__buttonsWrapper">
                    <button class="doneButton" id="doneButton">Done</button>
                    <button class="deleteButton" id="deleteButton">Delete</button>
            </div>
         </div>
`;// method uses CSS3 selectors for querying the DOM and CSS3 doesn't support ID selectors that start with a digit:
    tasksContainer.innerHTML = addedTaskHTML;
  });
};

if (localStorage.getItem("taskList")) {
  arrOfTasks = JSON.parse(localStorage.getItem("taskList"));
  displayTasks();
}

addingTask();

const deleteButton = document.querySelectorAll("#deleteButton");

const deleteTask = () => {
  deleteButton.forEach((item)=> {
    item.addEventListener("click", () => {
      let copyOfArrOfTasks = JSON.parse(localStorage.getItem("taskList"));
      const indexOfDeleteButton = Array.from(deleteButton).indexOf(item);
      console.log(indexOfDeleteButton);
      // copyOfArrOfTasks.splice(indexOfDeleteButton, 1);
      // localStorage.setItem("taskList", JSON.stringify(copyOfArrOfTasks));
      // item.closest(".task").remove();
    });
  });
};

deleteTask();
