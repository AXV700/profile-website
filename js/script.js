console.log("Welcome to my profile!");

function showPopup(projectId) {
    const popupDetails = {
        project1: "This is a responsive personal portfolio website built using HTML, CSS, and JavaScript. It showcases my skills and work.",
        project2: "This is an e-commerce application with secure payment integration, a responsive interface, and a product catalog."
    };

    const modal = document.getElementById("popup-modal");
    const details = document.getElementById("popup-details");
    details.textContent = popupDetails[projectId] || "Project details not found.";
    modal.style.display = "flex";
}

function closePopup() {
    const modal = document.getElementById("popup-modal");
    modal.style.display = "none";
}
