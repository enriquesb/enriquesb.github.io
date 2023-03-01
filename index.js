function myFunction() {
  var navLinks = document.querySelectorAll(".nav-links");
  navLinks.forEach((x) => {
    if (x.className === "nav-links") {
      x.className += " responsive";
    } else {
      x.className = "nav-links";
    }
  });
}
