import { initializeData, onSearch, onSort, onFilter } from "./dataManagement.js";
import { displayList, addFilterTypes, addMutateEventListeners } from "./indexView.js";

const data = await initializeData();

displayList(data);
addFilterTypes(data);

addMutateEventListeners(onSearch, onSort, onFilter);
