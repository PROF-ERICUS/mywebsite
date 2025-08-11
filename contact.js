// === Auto-update footer year ===
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.textContent = "☀️";
    }
});

// === Theme Toggle ===
const themeToggle = document.getElementById("theme-toggle");
themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// === Mobile Menu Toggle ===
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// === Form Submission (Formspree) ===
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', function (event) {
    // Formspree handles submission automatically
    alert('Your message has been sent successfully!');
});
