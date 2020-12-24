import "./tasks.css";
import { activeTasksPage, completedTasksPage } from "../../constants/pagePaths";

const localStorageKeyOfActiveTasks = "activeTasksItems";
const localStorageKeyOfCompletedTasks = "completedTasksItems";

export const updateLocalStorage = (key, val) => {
  localStorage.setItem(`${key}`, JSON.stringify(val));
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(`${key}`));
};

let arrOfActiveTasks = getLocalStorage(localStorageKeyOfActiveTasks) || [];
let arrOfCompletedTasks = getLocalStorage(localStorageKeyOfCompletedTasks) || [];

if (window.location.pathname === activeTasksPage) {
  if (!localStorage.getItem(localStorageKeyOfActiveTasks)) {
    updateLocalStorage(localStorageKeyOfActiveTasks, arrOfActiveTasks);
  }
  arrOfActiveTasks = getLocalStorage(localStorageKeyOfActiveTasks);
}
if (window.location.pathname === completedTasksPage) {
  if (!localStorage.getItem(localStorageKeyOfCompletedTasks)) {
    updateLocalStorage(localStorageKeyOfCompletedTasks, arrOfCompletedTasks);
  }
  arrOfCompletedTasks = getLocalStorage(localStorageKeyOfCompletedTasks);
}

const taskProps = (taskName) => {
  return {
    taskName
  };
};

export const addTask = () => {
  const addBtn = document.getElementById("form__addTaskButton");
  const taskName = document.getElementById("form__addTaskInput");

  addBtn.addEventListener("click", function (event) {
    arrOfActiveTasks.push(taskProps(taskName.value));
    updateLocalStorage(localStorageKeyOfActiveTasks, arrOfActiveTasks);
  });
};

export const displayTasks = () => {
  if (window.location.pathname === activeTasksPage) {
    const containerForActiveTasks = document.getElementById("activeTasksContainer");

    arrOfActiveTasks.forEach(function (el, index) {
      const taskItemHTML = `
          <div class="task"  id='item_${index}'>
              <div class="taskHeaderWrapper">
                  <span class="taskHeaderWrapper__taskText">${el.taskName}</span>
              </div>
              <div class="task_Container__buttonsWrapper">
                  <div class="task_Container__completeTaskButton">
                      <input
                      class="task_Container__completeTaskButton__checkbox"
                      id="task_Container__completeTaskButton__checkbox"
                      type="checkbox">
                  </div>
              </div>
           </div>
`;
      containerForActiveTasks.innerHTML += taskItemHTML;
    });
  }

  if (window.location.pathname === completedTasksPage) {
    const containerForCompletedTasks = document.getElementById("completedTasksContainer");

    arrOfCompletedTasks.forEach(function (el, index) {
      const taskItemHTML = `
          <div class="task"  id='item_${index}'>
              <div class="taskHeaderWrapper">
                  <span class="taskHeaderWrapper__taskText">${el.taskName}</span>
              </div>
              <div class="task_Container__buttonsWrapper">
                  <div class="task_Container__completeTaskButton">
                      <input
                      class="task_Container__completeTaskButton__checkbox"
                      id="task_Container__completeTaskButton__checkbox"
                      type="checkbox">
                  </div>
              </div>
           </div>
`;
      containerForCompletedTasks.innerHTML += taskItemHTML;
    });
  }
};

export const changeTaskStatus = () => {
  const checkBoxes = document.querySelectorAll(".task_Container__completeTaskButton__checkbox");

  checkBoxes.forEach(function (checkBox) {
    checkBox.addEventListener("change", function () {
      if (checkBox.checked) {
        const local = getLocalStorage(localStorageKeyOfActiveTasks);
        console.log(local);
        const targetTask = this.parentNode.parentNode.parentNode;
        const contentOfTargetTask = targetTask.innerText;
        const targetTaskInLocalStorage = local.find(item => item.taskName === contentOfTargetTask);
        const indexOfTargetTask = local.indexOf(targetTaskInLocalStorage);
        arrOfCompletedTasks.push(targetTaskInLocalStorage);
        updateLocalStorage(localStorageKeyOfCompletedTasks, arrOfCompletedTasks);
        arrOfActiveTasks.splice(indexOfTargetTask, 1);
        updateLocalStorage(localStorageKeyOfActiveTasks, arrOfActiveTasks);
        window.location.reload();
      }
    });
  });
};
