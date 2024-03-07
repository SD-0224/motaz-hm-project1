export function debounce(callback, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(async () => {
      await callback(...args);
    }, delay);
  };
}
