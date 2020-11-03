import "./mainWrapper.css";
import { insertElem } from "../../functions/insertElem";

const mainWrapperHTML = `
<div class="main-wrapper" id="main-wrapper"></div>
`;

export function mainWrapper() {
  insertElem("root", mainWrapperHTML);
}
mainWrapper();
