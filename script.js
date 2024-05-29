// <!-- Setup and start animation! -->

var typed = new Typed("#element", {
  strings: [
    "Front-end Engineer",
    "JavaScript Developer",
    "Web Developer",
    "React.js Developer",
  ],
  typeSpeed: 70,
  loop: true,
  loopCount: Infinity,
});

// Hamburger Menu JS Code

const menu_nav = document.querySelector(".mobile-menu");

const navbar = document.querySelector("#navbar");

const toggleNavbar = () => {
  // alert("Sagar");
  navbar.classList.toggle("active");
};

menu_nav.addEventListener("click", () => toggleNavbar());
