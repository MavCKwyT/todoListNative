import { activeTasksContainerHTML } from "../../components/activeTasksContainer/activeTasksContainer";
import { completedTasksContainerHTML } from "../../components/completedTasksContainer/completedTasksContainer";

const activeTasksPage = "/activeTasks";
const completedTasksPage = "/completedTasks";
let targetContainer = document.querySelector("#commonTasksContainer");

const pushState = (state, url) => {
  window.history.pushState(state, null, url);
  targetContainer.innerHTML = window.history.state;
};

switch (window.location.pathname) {
case activeTasksPage:
  pushState(activeTasksContainerHTML, activeTasksPage);
  break;
case completedTasksPage:
  pushState(completedTasksContainerHTML, completedTasksPage);
  break;
default:
  window.location.pathname = activeTasksPage;
}

window.onload = function retrieveFromHistory() {
  const activeTasksBtn = document.getElementById("activeTasksIcon");
  const completedTasksBtn = document.getElementById("completedTasksIcon");

  activeTasksBtn.addEventListener("click", function () {
    pushState(activeTasksContainerHTML, activeTasksPage);
    targetContainer.innerHTML = window.history.state;
  });
  completedTasksBtn.addEventListener("click", function () {
    pushState(completedTasksContainerHTML, completedTasksPage);
    targetContainer.innerHTML = window.history.state;
  });
};

// if (!window.location.hash) {
//   window.location.hash = "/activeTasks";
// }
//
// const getRoute = (route) => {
//   switch (route) {
//   case "#/activeTasks":
//     return activeTasksContainer();
//   case "#/completedTasks":
//     return completedTasksContainer();
//   default:
//     return "LOL";
//   }
// };
//
// window.addEventListener("hashchange", ()=> {
//   getRoute(window.location.hash);
// });
// getRoute(window.location.hash);

// if (window.location.pathname !== activeTasksPage && window.location.pathname !== completedTasksPage) {
//   window.location.pathname = activeTasksPage;
// }
//
// if (window.location.pathname === activeTasksPage) {
//   pushState(activeTasksContainerHTML, activeTasksPage);
// }
//
// if (window.location.pathname === completedTasksPage) {
//   pushState(completedTasksContainerHTML, completedTasksPage);
// }
