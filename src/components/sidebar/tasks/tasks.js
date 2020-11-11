import "./tasks.css";
const taskHTML = `<div class="sidebar-tasks__header">
    <span class="sidebar-tasks__header-name">Tasks</span>
    <img class="sidebar-tasks__add-task-button" id="sidebar-tasks__add-task-button"
         src="src/assets/img/plus.svg">
    <div class="sidebar-tasks__tasks">
        <div class="sidebar-tasks__task-lists" id="sidebar-tasks__task-lists">
            <div class="sidebar-tasks__modal_hidden" id="sidebar-tasks__modal_hidden">
                <div class="sidebar-tasks__modal">
                    <div class="sidebar-tasks__modal-header">
                        <div class="sidebar-tasks__modal-header-wrapper">
                            <div class="sidebar-tasks__modal-header-name" id="sidebar-tasks__modal-header-name"
                              contenteditable="true">Untitled</div>
                        </div>
                         <span id="close">X</span>
                        <button id="sidebar-tasks__to-add-task-button">Add task</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

export function task() {
  document.getElementById("sidebar__tasks-container").innerHTML = taskHTML;
}
task();

const modalWindow = document.querySelector("#sidebar-tasks__modal_hidden");
const addTaskButton = document.querySelector("#sidebar-tasks__add-task-button");
const toAddTaskButton = document.querySelector("#sidebar-tasks__to-add-task-button");
const closeButton = document.querySelector("#close");
const taskHeaderName = document.querySelector("#sidebar-tasks__modal-header-name");
const notStartedTasks = document.querySelector("#board__not-started-tasks");

const openModal = () => {
  addTaskButton.addEventListener("click", () => {
    if (!modalWindow.style.display || modalWindow.style.display === "none") {
      modalWindow.style.display = "block";
    } else {
      modalWindow.style.display = "none";
    }
  });
};

openModal();

export const closeModal = () => {
  closeButton.addEventListener("click", () => {
    if (modalWindow.style.display || modalWindow.style.display !== "none") {
      modalWindow.style.display = "none";
    } else {
      modalWindow.style.display = "block";
    }
  });
};

closeModal();

let arrOfTasks = [];

const displayTasks = () => {
  let addedTaskHTML = "";
  arrOfTasks.forEach((item, index) => {
    addedTaskHTML += `
        <div class="task" id="${index}">
            <h2>${item.taskName}</h2>
        </div>
`;
    notStartedTasks.innerHTML = addedTaskHTML;
  });
};

if (localStorage.getItem("taskList")) {
  arrOfTasks = JSON.parse(localStorage.getItem("taskList"));
  displayTasks();
}

const addingTask = () => {
  toAddTaskButton.addEventListener("click", () => {
    let newTaskProp = {
      taskName: taskHeaderName.textContent
    };
    arrOfTasks.push(newTaskProp);
    if (modalWindow.style.display || modalWindow.style.display !== "none") {
      modalWindow.style.display = "none";
    }
    displayTasks();
    localStorage.setItem("taskList", JSON.stringify(arrOfTasks));
  });
};

addingTask();
