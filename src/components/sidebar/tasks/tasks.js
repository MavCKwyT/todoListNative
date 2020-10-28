import "./tasks.css";

export function task() {
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
                            <div class="sidebar-tasks__modal-header-name"  contenteditable="true">Untitled</div>
                        </div>
                        <button>Add task</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  document.getElementById("sidebar__tasks-container").innerHTML = taskHTML;
}

task();

const openModal = () => {
  const modal = document.getElementById("sidebar-tasks__modal_hidden");
  const addTaskButton = document.getElementById("sidebar-tasks__add-task-button");

  addTaskButton.addEventListener("click", () => {
    if (!modal.style.display || modal.style.display === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  });
};

openModal();
