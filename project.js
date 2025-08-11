document.addEventListener("DOMContentLoaded", () => {
    // === Auto-update footer year ===
    const yearSpan = document.querySelector("#currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // === Theme Toggle ===
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark-theme");
            themeToggle.textContent = "☀️";
        }

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const isDark = document.body.classList.contains("dark-theme");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            themeToggle.textContent = isDark ? "☀️" : "🌙";
        });
    }

    // === Mobile Menu Toggle ===
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            const isActive = nav.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", isActive);
        });
    }
});
