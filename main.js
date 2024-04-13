const input = document.querySelector("input");

input.addEventListener("click", () => {
  if (input.checked) {
    document.body.style.backgroundColor = "#555";
  } else {
    document.body.removeAttribute("style");
  }
});
