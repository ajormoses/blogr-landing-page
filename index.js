var icon = document.querySelector(".brand-icon");
var hamburger = document.querySelector(".hamburger");
var close = document.querySelector(".close");
var navcontent = document.querySelector(".nav-content");
var toggle = document.querySelectorAll(".toggle");
var headerSection = document.querySelector(".header-section");
var loginsect = document.querySelector(".login-sect");

icon.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  close.classList.toggle("show");
  navcontent.classList.toggle("show");
  headerSection.classList.toggle("show");
  loginsect.classList.toggle("show");
});

toggle.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    var id = e.target.id;
    var arrow = document.querySelector(`.${id}-arrow`);
    var content = document.querySelector(`.${id}-content`);
    arrow.classList.toggle("show");
    content.classList.toggle("show");
    console.log("moses");
  });
});
