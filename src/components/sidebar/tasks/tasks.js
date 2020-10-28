import "./tasks.css";
import { insertElem } from "../../../functions/insertElem";

const openModal = () => {
  const modal = document.getElementById("sidebar-tasks__modal_hidden");
  const addTaskButton = document.getElementById("sidebar-tasks__add-task-button");

  // addTaskButton.addEventListener("click", () => {
  if (!modal.style.display || modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
  // });
};

insertElem("../src/components/sidebar/tasks/tasks.html", "sidebar__tasks-container", openModal);
