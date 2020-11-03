import "../../functions/createElem";
import "./sidebar.css";
import { insertElem } from "../../functions/insertElem";

const sidebarHTML = `
<aside class="sidebar" id="sidebar">
    <div class="sidebar-workspace__header">
        <span class="sidebar-workspace__header-name">Workspace</span>
    </div>
    <div class="sidebar__chat-container" id="sidebar__chat-container"></div>
    <div class="sidebar__tasks-container" id="sidebar__tasks-container"></div>
</aside>
`;

export function sidebar() {
  insertElem("main-wrapper", sidebarHTML);
}
sidebar();
