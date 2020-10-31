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

const openModal = () => {
  const modalWindow = document.getElementById("sidebar-tasks__modal_hidden");
  const addTaskButton = document.getElementById("sidebar-tasks__add-task-button");

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
  const modalWindow = document.getElementById("sidebar-tasks__modal_hidden");
  const closeButton = document.getElementById("close");

  closeButton.addEventListener("click", () => {
    if (modalWindow.style.display || modalWindow.style.display !== "none") {
      modalWindow.style.display = "none";
    } else {
      modalWindow.style.display = "block";
    }
  });
};
closeModal();

const addTask = () => {
  const addedTaskHTML = `
<div>
    <h2 id="taskHeader"></h2>
</div>
`;

  const toAddTaskButton = document.getElementById("sidebar-tasks__to-add-task-button");
  const modalWindow = document.getElementById("sidebar-tasks__modal_hidden");
  let taskName;

  toAddTaskButton.addEventListener("click", () => {
    document.getElementById("todo-main-frame").innerHTML = addedTaskHTML;
    taskName = document.getElementById("sidebar-tasks__modal-header-name").textContent;
    document.getElementById("taskHeader").innerText = taskName;
    if (modalWindow.style.display || modalWindow.style.display !== "none") {
      modalWindow.style.display = "none";
    }
  });
};
addTask();
