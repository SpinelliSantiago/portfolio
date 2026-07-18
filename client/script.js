/* -------- NAVBAR -------- */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* -------- RESUME -------- */
const cvBtn = document.querySelector(".cv_btn");

cvBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/Santiago Spinelli RESUME.pdf";
    link.download = "Santiago Spinelli RESUME.pdf";
    link.click();
});


/* -------- FORM -------- */
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();


    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const response = await fetch("http://localhost:3000/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            message
        })
    });

    const data = await response.json();
    console.log(data);
});