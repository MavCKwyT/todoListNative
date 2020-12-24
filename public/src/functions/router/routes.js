import { activeTasksContainerHTML } from "../../components/activeTasksContainer/activeTasksContainer";
import { completedTasksContainerHTML } from "../../components/completedTasksContainer/completedTasksContainer";
import {
  addTask, changeTaskStatus, displayTasks
} from "../../components/tasks/tasks";
import { activeTasksPage, completedTasksPage } from "../../constants/pagePaths";

let targetContainer = document.querySelector("#commonTasksContainer");

const pushState = (state, url) => {
  window.history.pushState(state, null, url);
  targetContainer.innerHTML = window.history.state;
};

switch (window.location.pathname) {
case !activeTasksPage && completedTasksPage:
  alert("404 error");
  break;
case activeTasksPage:
  pushState(activeTasksContainerHTML, activeTasksPage);
  break;
case completedTasksPage:
  pushState(completedTasksContainerHTML, completedTasksPage);
  break;
default:
  window.location.pathname = activeTasksPage;
}

window.onload = function () {
  const activeTasksBtn = document.getElementById("activeTasksIcon");
  const completedTasksBtn = document.getElementById("completedTasksIcon");

  activeTasksBtn.addEventListener("click", function () {
    pushState(activeTasksContainerHTML, activeTasksPage);
    targetContainer.innerHTML = window.history.state;
    window.location.reload();
  });
  completedTasksBtn.addEventListener("click", function () {
    pushState(completedTasksContainerHTML, completedTasksPage);
    targetContainer.innerHTML = window.history.state;
    window.location.reload();
  });
};

displayTasks();
addTask();
changeTaskStatus();
