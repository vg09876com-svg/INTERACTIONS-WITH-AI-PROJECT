// Get the theme toggle button
const themeToggle = document.getElementById("themeToggle");

// Listen for a click on the button
themeToggle.addEventListener("click", function () {

    // Add or remove the "dark" class from the body
    document.body.classList.toggle("dark");

    // Check if dark mode is currently active
    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️ Light Mode";

    } else {

        themeToggle.textContent = "🌙 Dark Mode";

    }

});