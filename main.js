const lightInput = document.querySelector("#light");

lightInput.addEventListener("click", () => {
  if (lightInput.checked) {
    document.body.style.backgroundColor = "#555";
  } else {
    document.body.removeAttribute("style");
  }
});
