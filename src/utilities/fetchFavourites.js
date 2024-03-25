import { fetchData } from "./fetch";

export async function fetchFavourites(idArr) {
  const favPromises = idArr.map((id) => fetchData(`https://tap-web-1.herokuapp.com/topics/details/${id}`));
  return await Promise.all(favPromises);
}
