let upArrow = document.querySelector(".arrow");

window.onscroll = function () {
  this.scrollY >= 400
    ? upArrow.classList.add("show")
    : upArrow.classList.remove("show");
};

upArrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
