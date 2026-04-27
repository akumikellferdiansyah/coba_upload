document.addEventListener("DOMContentLoaded", () => {
  let timeout;

  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  window.addEventListener("scroll", () => {
    navbar.classList.add("hide");
    footer.classList.add("hide");

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      navbar.classList.remove("hide");
      footer.classList.remove("hide");
    }, 200);
  });
});