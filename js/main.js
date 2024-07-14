const toggler = document.querySelector(".nav__toggler");

// toggler.addEventListener("click", function () {
//   const navList = document.querySelector(".nav__list");
//   navList.classList.contains("hidden-list")
//     ? navList.classList.remove("hidden-list")
//     : navList.classList.add("hidden-list");
//   toggler.classList.contains("toggled")
//     ? toggler.classList.remove("toggled")
//     : toggler.classList.add("toggled");
// });

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});

const accordionHeaders = document.querySelectorAll(".accordion__header");
const accordion = document.querySelector(".accordion");
accordionHeaders.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("accordion__expanded");
  });
});
