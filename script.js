document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburg");
    const navLinks = document.querySelector(".links");

    if (menuToggle && navLinks) { // Check if elements exist
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Navbar elements not found. Check your HTML.");
    }
});