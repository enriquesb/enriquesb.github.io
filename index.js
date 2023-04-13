const navLinks = document.getElementsByClassName("nav-links")[0];
const openBtn = document.getElementsByClassName("open-menu-btn")[0];
const closeBtn = document.getElementsByClassName("close-menu-btn")[0];

openBtn.addEventListener("click", () => {
  closeBtn.className = "close-menu-btn";
  openBtn.className = "open-menu-btn nav-btn-hide";
  navLinks.className = "nav-links nav-menu-show";
});

closeBtn.addEventListener("click", () => {
  closeBtn.className = "close-menu-btn nav-btn-hide";
  openBtn.className = "open-menu-btn";
  navLinks.className = "nav-links";
  setTimeout(() => {
    navLinks.className = "nav-links hide-menu";
  }, "400");
});

function closeMenu() {
  closeBtn.className = "close-menu-btn nav-btn-hide";
  openBtn.className = "open-menu-btn";
  navLinks.className = "nav-links";
  setTimeout(() => {
    navLinks.className = "nav-links hide-menu";
  }, "400");
}
