import { displayItem, isFavourite, addFavouritesEventListeners } from "./detailsView.js";
import { fetchData } from "../modules/fetch.js";
import { displayFavourites } from "../modules/displayFavourites.js";

const queryParams = new URLSearchParams(window.location.search);

let id = queryParams.get("id");
const path = `https://tap-web-1.herokuapp.com/topics/details/${id}`;
const item = await fetchData(path);

displayItem(item);

let intId = parseInt(id);
let favoutiresIdArray = localStorage.favourites ? JSON.parse(localStorage.favourites) : [];

isFavourite(intId, favoutiresIdArray);
addFavouritesEventListeners(intId, favoutiresIdArray);

displayFavourites();
