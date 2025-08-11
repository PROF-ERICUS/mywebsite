// =======================
// Portfolio JavaScript
// =======================

// Auto-update year in footer
document.addEventListener("DOMContentLoaded", function () {
    const footerYear = document.querySelector("footer p");
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} Eric Andoh. All Rights Reserved.`;
    }
});

// === Auto-update footer year ===
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// === Theme Toggle ===
const themeToggle = document.getElementById("theme-toggle");
themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Save theme preference in localStorage
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});

// Load theme preference on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
}