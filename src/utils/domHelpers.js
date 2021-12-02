// querySelector wrapper
export function $(selector) {
  return document.querySelector(selector);
}

// querySelectorAll wrapper
export function $all(selector) {
  return document.querySelectorAll(selector);
}

export function preventPageRefresh() {
  $all('form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  });
}
