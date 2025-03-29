const dark = document.getElementById("dark");
const body = document.body;

if (localStorage.getItem("dark-mode") === "0") {
  body.classList.add("dark-mode");
}

dark.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "0");
  } else {
    localStorage.setItem("dark-mode", "0");
  }
});
