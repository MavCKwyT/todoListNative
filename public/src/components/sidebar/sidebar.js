import "../../functions/createElem";
import "./sidebar.css";
import { insertElem } from "../../functions/insertElem";

const sidebarHTML = `
<aside class="sidebar" id="sidebar">Sidebar</aside>
`;

export function sidebar() {
  insertElem("mainWrapper", sidebarHTML);
}
sidebar();
