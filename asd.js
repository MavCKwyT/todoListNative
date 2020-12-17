// const addTaskButton = document.querySelector("#form__addTaskButton");
// const taskName = document.querySelector("#form__addTaskInput");
// const tasksContainer = document.querySelector("#activeTasksContainer");
//
// let arrOfActiveTasks = [];
// let arrOfCompletedTasks = [];
//
// if (localStorage.getItem("activeTasksList")) {
//   arrOfActiveTasks = JSON.parse(localStorage.getItem("activeTasksList"));
// }
//
// if (localStorage.getItem("completedTasksList")) {
//   arrOfCompletedTasks = JSON.parse(localStorage.getItem("completedTasksList"));
// }
//
// const updateLocalStorageForActiveTasksPage = () => {
//   if (window.location.hash === "#/activeTasks") {
//     localStorage.setItem("activeTasksList", JSON.stringify(arrOfActiveTasks));
//   }
// };
//
// const updateLocalStorageForCompletedTasksPage = () => {
//   localStorage.setItem("completedTasksList", JSON.stringify(arrOfCompletedTasks));
// };
//
// const displayTasks = () => {
//   if (window.location.hash === "#/completedTasks") {
//     const completedTaskContainer = document.querySelector("#completedTasksContainer");
//     completedTaskContainer.innerHTML = "";
//     arrOfCompletedTasks.forEach((element, index)=> {
//       const taskItemHTML = `
//         <div class="task"  id='item_${index}'>
//             <div class="taskHeaderWrapper">
//                 <span class="taskHeaderWrapper__taskText">${element.taskName}</span>
//             </div>
//             <div class="task_Container__buttonsWrapper">
//                 <div class="task_Container__completeTaskButton">
//                     <input
//                     class="task_Container__completeTaskButton__checkbox"
//                     id="task_Container__completeTaskButton__checkbox"
//                     type="checkbox">
//                 </div>
//             </div>
// `;
//       completedTaskContainer.innerHTML += taskItemHTML;
//     });
//   }
//   if (window.location.hash === "#/activeTasks") {
//     tasksContainer.innerHTML = "";
//     arrOfActiveTasks.forEach((element, index)=> {
//       const taskItemHTML = `
//         <div class="task"  id='item_${index}'>
//             <div class="taskHeaderWrapper">
//                 <span class="taskHeaderWrapper__taskText">${element.taskName}</span>
//             </div>
//             <div class="task_Container__buttonsWrapper">
//                 <div class="task_Container__completeTaskButton">
//                     <input
//                     class="task_Container__completeTaskButton__checkbox"
//                     id="task_Container__completeTaskButton__checkbox"
//                     type="checkbox">
//                 </div>
//             </div>
// `;
//       tasksContainer.innerHTML += taskItemHTML;
//     });
//   }
// };
//
// displayTasks();
//
// const createTask = () => {
//   addTaskButton.addEventListener("click", () => {
//     const taskProps = {
//       taskName: taskName.value
//     };
//     arrOfActiveTasks.push(taskProps);
//     updateLocalStorageForActiveTasksPage();
//     displayTasks();
//   });
// };
//
// createTask();
//
// const changeTaskStatus = () => {
//   const taskItems = document.querySelectorAll(".task");
//   if (window.location.hash === "#/activeTasks") {
//     taskItems.forEach((taskItem) => {
//       taskItem.addEventListener("click", () => {
//         const taskItemValue = taskItem.children[0].textContent;
//         arrOfCompletedTasks.push({
//           taskName: taskItemValue
//         });
//         updateLocalStorageForCompletedTasksPage();
//         displayTasks();
//       });
//     });
//   }
// };
//
// changeTaskStatus();
//
// const deleteTask = () => {
//   const completeButtons = document.querySelectorAll(".task_Container__buttonsWrapper");
//   if (window.location.hash === "#/activeTasks") {
//     completeButtons.forEach((completeButton, index)=>{
//       completeButton.addEventListener("click", () => {
//         arrOfActiveTasks.splice(index, 1);
//         window.location.reload();
//         updateLocalStorageForActiveTasksPage();
//       });
//     });
//   }
// };
//
// deleteTask();
