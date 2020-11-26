import "./mainWrapper.css";
import { insertElem } from "../../functions/insertElem";

const mainWrapperHTML = `
<div class="mainWrapper" id="mainWrapper"></div>
`;

export function mainWrapper() {
  insertElem("root", mainWrapperHTML);
}
mainWrapper();
