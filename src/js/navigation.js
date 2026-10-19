document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((sec) => {
      const sectionTop = sec.offsetTop;
      const sectionHeight = sec.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = sec.getAttribute("id");
      }
    });

    navLinks.forEach((nav) => {
      nav.classList.remove("active");
      if (nav.getAttribute("href") === "#" + currentSection) {
        nav.classList.add("active");
      }
    });
  });

  navLinks.forEach((nav) => {
    nav.addEventListener("click", function () {
      navLinks.forEach((a) => a.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
