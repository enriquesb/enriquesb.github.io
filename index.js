function toggleMenu() {
  let navLinks = document.querySelectorAll("div.nav-links");
  let menu = navLinks[0];
  if (menu.className === "nav-links") {
    menu.className += " hidden-menu";
  } else {
    menu.className = "nav-links";
  }
}
