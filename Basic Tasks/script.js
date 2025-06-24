// Dropdown logic
document.getElementById("dropdownBtn").addEventListener("click", function () {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdownMenu");
  const btn = document.getElementById("dropdownBtn");
  if (e.target !== menu && e.target !== btn) {
    menu.style.display = "none";
  }
});

// Modal logic
const modal = document.getElementById("infoModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
