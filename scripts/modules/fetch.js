export async function fetchData(path) {
  try {
    const response = await fetch(path);
    return await response.json();
  } catch (error) {
    return;
  }
}