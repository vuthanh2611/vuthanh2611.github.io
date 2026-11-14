// Keep the site usable without JavaScript. This only updates the footer year.
document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});
