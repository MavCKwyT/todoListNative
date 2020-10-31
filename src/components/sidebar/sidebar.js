import "./sidebar.css";

export function sidebar() {
  const sidebarHTML = `
<aside class="sidebar">
    <div class="sidebar-workspace__header">
        <span class="sidebar-workspace__header-name">Workspace</span>
    </div>
    <div class="sidebar__chat-container" id="sidebar__chat-container"></div>
    <div class="sidebar__tasks-container" id="sidebar__tasks-container"></div>
</aside>
<div class="todo-main-frame" id="todo-main-frame">

</div>
`;
  document.getElementById("root").innerHTML = sidebarHTML;
}

sidebar();
