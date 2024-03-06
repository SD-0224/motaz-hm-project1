import { displayItem } from "./detailsView.js";
import { fetchData } from "../modules/fetch.js";

const queryParams = new URLSearchParams(window.location.search);

let id = queryParams.get("id");

const path = `https://tap-web-1.herokuapp.com/topics/details/${id}`;

const item = await fetchData(path);

displayItem(item);
