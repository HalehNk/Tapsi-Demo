const toggler = document.querySelector(".nav__toggler");

toggler.addEventListener("click", function () {
  const navList = document.querySelector(".nav__list");
  navList.classList.contains("hidden-list")
    ? navList.classList.remove("hidden-list")
    : navList.classList.add("hidden-list");
  toggler.classList.contains("toggled")
    ? toggler.classList.remove("toggled")
    : toggler.classList.add("toggled");
});
