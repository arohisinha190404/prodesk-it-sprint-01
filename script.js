// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navContainer = document.getElementById("navContainer");

menuToggle.addEventListener("click", function () {

    navContainer.classList.toggle("active");

    const isOpen = navContainer.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// =========================================
// CLOSE MOBILE MENU AFTER CLICKING LINK
// =========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navContainer.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// =========================================
// DARK / LIGHT MODE
// =========================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const darkModeEnabled =
        document.body.classList.contains("dark-mode");

    if (darkModeEnabled) {

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

});