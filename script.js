// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".section").forEach((section) => {

    section.classList.add("fade-in");

    observer.observe(section);

});


// ===============================
// HERO GRAPH FLOAT
// ===============================

const graph = document.querySelector(".hero-graph");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    graph.style.transform =
        `translate(${x}px, ${y}px)`;

});


// ===============================
// CARD HOVER TILT
// ===============================

const cards = document.querySelectorAll(

    ".project-card, .skill-card"

);

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 18;
        const rotateY = (x - rect.width / 2) / 18;

        card.style.transform =

            `perspective(1000px)

             rotateX(${rotateX}deg)

             rotateY(${rotateY}deg)

             scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(

    ".btn-primary, .btn-secondary"

);

buttons.forEach((button) => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty("--x", x + "px");
        button.style.setProperty("--y", y + "px");

    });

});


// ===============================
// TYPEWRITER EFFECT
// ===============================

const subtitle = document.querySelector(".hero h2");

const text = "Aspiring Data Analyst";

let index = 0;

subtitle.textContent = "";

function typing() {

    if (index < text.length) {

        subtitle.textContent += text.charAt(index);

        index++;

        setTimeout(typing, 80);

    }

}

typing();


// ===============================
// PARALLAX BACKGROUND GLOW
// ===============================

const glow1 = document.querySelector(".glow1");
const glow2 = document.querySelector(".glow2");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / 50;
    const y = e.clientY / 50;

    glow1.style.transform =

        `translate(${x}px, ${y}px)`;

    glow2.style.transform =

        `translate(${-x}px, ${-y}px)`;

});