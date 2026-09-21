// =========================================
// CURRENT YEAR
// =========================================

const currentYear = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${currentYear} Vamshi Krishna Dasari. Built with HTML, CSS & JavaScript.`;
}


// =========================================
// NAVIGATION ACTIVE STATE
// =========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// =========================================
// PAGE LOAD MESSAGE
// =========================================

console.log(
    "Vamshi Krishna Dasari | QA Engineer Portfolio"
);
