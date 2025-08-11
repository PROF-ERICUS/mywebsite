// =======================
// Portfolio JavaScript
// =======================

document.addEventListener("DOMContentLoaded", () => {
    // === Auto-update footer year ===
    const yearSpan = document.querySelector("#currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // === Theme Toggle ===
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        if (themeToggle) themeToggle.textContent = "☀️";
    }

    themeToggle?.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
    });

    // === Mobile Menu Toggle ===
    const menuToggle = document.querySelector("header .menu-toggle");
    const nav = document.querySelector("header nav");

    menuToggle?.addEventListener("click", () => {
        const isActive = nav.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isActive);
    });

    // Optional: Close menu on ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("active")) {
            nav.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});
