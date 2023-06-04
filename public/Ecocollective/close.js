const closeBtn = document.querySelector(".close-btn");
const parent = document.querySelector(".parent");

closeBtn.addEventListener("click", function() {
  parent.style.display = "none";
});
