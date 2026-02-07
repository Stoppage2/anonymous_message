// Select the toggle button
const toggle = document.getElementById("dark-mode-toggle");

// Add click event
toggle.addEventListener("click", () => {
    // Toggle the dark-mode class on <body>
    document.body.classList.toggle("dark-mode");

    // Change button text depending on mode
    if (document.body.classList.contains("dark-mode")) {
        toggle.textContent = "☀️ Light Mode";
    } else {
        toggle.textContent = "🌙 Dark Mode";
    }
});
