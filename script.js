document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home-link");
    const servicesLink = document.getElementById("services-link");
    const contactLink = document.getElementById("contact-link");

    const sections = document.querySelectorAll("main > section");

    function showSection(sectionId) {
        sections.forEach((section) => {
            section.classList.add("hidden");
        });
        document.getElementById(sectionId).classList.remove("hidden");

        document.querySelectorAll("nav ul li a").forEach(link => {
            link.classList.remove("active");
        });
        const activeLink = document.getElementById(`${sectionId}-link`);
        if (activeLink) activeLink.classList.add("active");
    }

    homeLink.addEventListener("click", function () {
        showSection("home");
    });

    servicesLink.addEventListener("click", function () {
        showSection("services");
    });

    contactLink.addEventListener("click", function () {
        showSection("contact");
    });

    showSection("home");

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Votre message a été envoyé avec succès.");
        form.reset();
    });
});
