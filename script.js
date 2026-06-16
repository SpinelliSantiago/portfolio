const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const cvBtn = document.querySelector(".cv_btn");

cvBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/Santiago Spinelli CV.pdf";
    link.download = "Santiago Spinelli CV.pdf";
    link.click();
});