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

if (localStorage.getItem("taskList")) {
  arrOfTasks = JSON.parse(localStorage.getItem("taskList"));
}

function TaskProps(textOfTask) {
  this.textOfTask = textOfTask;
}

const createTask = (taskItem, index) => {
  const taskItemHTML = `
        <div class="task" draggable="true" id='item_${index}'>  
            <div class="taskHeaderWrapper">
                <span class="taskHeaderWrapper__taskText">${taskItem.textOfTask}</span>
            </div>
            <div class="task_Container__buttonsWrapper">
                <div class="task_Container__deleteButton">
                   <img class="deleteImg" src="../../../../../delete.png">
                </div>
            </div>  
`;
  tasksContainer.innerHTML += taskItemHTML;
};
const addTaskItemHTML = () => {
  tasksContainer.innerHTML = "";
  if (arrOfTasks.length > 0) {
    arrOfTasks.forEach((item, index) => {
      createTask(item, index);
    });
  }
};

addTaskItemHTML();

const updateLocalStorage = () => {
  localStorage.setItem("taskList", JSON.stringify(arrOfTasks));
};

const addTask = () => {
  addTaskButton.addEventListener("click", () => {
    arrOfTasks.push(new TaskProps(taskName.value));
    updateLocalStorage();
  });
};

addTask();

// const taskItems = document.querySelectorAll(".taskHeaderWrapper");
const deleteButtons = document.querySelectorAll(".task_Container__buttonsWrapper");

const deleteTask = () => {
  deleteButtons.forEach((deleteButton, index)=>{
    deleteButton.addEventListener("click", () => {
      arrOfTasks.splice(index, 1);
      updateLocalStorage();
      window.location.reload();
    });
  });
};

deleteTask();
