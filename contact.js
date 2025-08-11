// script.js

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


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_olf5hpq', 'template_g4eo7p3', this)
    .then(function() {
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset();
    }, function(error) {
      alert('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    });
});

