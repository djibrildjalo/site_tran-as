const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        event.preventDefault();
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});