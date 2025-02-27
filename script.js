document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Occupulse",
            description: "A full-stack Machine Learning Project leveraging KNN Algorithm for employability prediction.",
            image: "occupulse_logo.png",
            tags: ["Python", "Machine Learning", "Flask"],
            link: "Occupulse.html"
        },
        {
            title: "Chupurple",
            description: "Single-Paged Application (SPA) for Mixed Component Compilation using Vue.js.",
            image: "chuupurplelogo.png",
            tags: ["HTML", "Tailwind CSS", "Vue.js"],
            link: "https://chuupurple.vercel.app/"
        },
        {
            title: "PLP LOGO ANIMATION",
            description: "A 3D animated rendition of the Pamantasan ng Lungsod ng Pasig logo, created in Blender.",
            image: "PLPLOGO.png",
            tags: ["Blender", "3D Animation", "Lighting Effects"],
            link: "https://youtu.be/riYg0Rx2ghw"
        },
        {
            title: "RE:MINDER",
            description: "Arduino-based automated pill dispenser with Bluetooth integration for medication management.",
            image: "reminderlogo.png",
            tags: ["Arduino", "IoT", "Bluetooth"],
            link: "https://youtu.be/M3s5zXQEH-Q"
        }
    ];

    // Get modal elements
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("projectTitle");
    const modalDescription = document.getElementById("projectDescription");
    const modalImage = document.getElementById("projectImage");
    const modalTags = document.getElementById("projectTags");
    const modalLink = document.getElementById("projectLink");
    const closeModal = document.querySelector(".close");

    // When user clicks "View Project"
    document.querySelectorAll(".view-project").forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const index = button.getAttribute("data-index"); // Get project index
            const project = projects[index];

            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalImage.src = project.image;
            modalTags.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
            modalLink.href = project.link;

            modal.style.display = "flex";
        });
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
