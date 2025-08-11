// =======================
// Portfolio JavaScript
// =======================

// Auto-update year in footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        // Save theme preference in localStorage
        const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        localStorage.setItem("theme", theme);
        themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    });

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.textContent = "☀️";
    }
}

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");
if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });
}
